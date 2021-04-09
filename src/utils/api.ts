import {
  createClient,
  ContentfulClientApi,
  Entry,
  ContentType,
} from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export class ContentWrapper {
  client: ContentfulClientApi;

  constructor(space: string, accessToken: string) {
    this.client = createClient({
      space,
      accessToken,
    });
  }

  async get<T>(entity: string, options: any = {}): Promise<T[]> {
    const [entries, schema] = await Promise.all([
      this.client.getEntries({
        content_type: entity,
        ...options,
      }),
      this.client.getContentType(entity),
    ]);

    return Promise.all(
      entries.items.map(
        async (entry) => (await this.serialize(entry, schema)) as T
      )
    );
  }

  async serialize<T>(entry: Entry<T>, schema: ContentType): Promise<T> {
    const res = entry.fields;

    await Promise.all(
      schema.fields
        .filter(({ id }) => res[id] !== undefined)
        .map(async (field) => {
          const { id, type } = field;

          switch (type) {
            case "Link":
              res[id] = await this.transformLink(res[id], field.linkType);
              break;
            case "Array":
              res[id] = await Promise.all(
                res[id].map((link) =>
                  this.transformLink(link, field.items.linkType)
                )
              );
              break;
            case "RichText":
              res[id] = documentToHtmlString(res[id], {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: (node) => {
                    const {
                      file,
                      title,
                      description,
                    } = node.data.target.fields;
                    return `
                      <div class="column-center long-form-embed">
                          <img src="${file.url}?w=1200" alt="${title}" \>
                          ${
                            description !== undefined
                              ? `<span>${description}<\span>`
                              : ""
                          }
                      </div>
                    `;
                  },
                },
              });
              break;
          }
        })
    );

    return res;
  }

  async transformLink(link: any, type: string | undefined) {
    switch (type) {
      case "Asset":
        return link.src !== undefined // why do I need to do this?
          ? link
          : { src: link.fields.file.url, alt: link.fields.title };

      case "Entry":
        const schema = await this.client.getContentType(
          link.sys.contentType.sys.id
        );
        return await this.serialize(link, schema);

      case undefined:
        return link;
    }
  }
}
