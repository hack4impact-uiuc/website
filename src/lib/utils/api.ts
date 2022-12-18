import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import type { ContentfulClientApi, ContentType, Entry } from "contentful";

export class ContentWrapper {
  client: ContentfulClientApi | undefined;
  space: string;
  accessToken: string;

  constructor(space: string, accessToken: string) {
    this.space = space;
    this.accessToken = accessToken;
  }

  async build(): Promise<ContentfulClientApi> {
    const contentful = await import("contentful");

    this.client = contentful.createClient({
      space: this.space,
      accessToken: this.accessToken,
    });
    return this.client;
  }

  async get(entity: string, options: any = {}): Promise<any[]> {
    if (this.client === undefined) {
      this.client = await this.build();
    }

    const [entries, schema] = await Promise.all([
      this.client.getEntries({
        content_type: entity,
        ...options,
      }),
      this.client.getContentType(entity),
    ]);

    return Promise.all(
      entries.items.map(async (entry) => await this.serialize(entry, schema))
    );
  }

  async serialize(entry: Entry<any>, schema: ContentType): Promise<any> {
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
                res[id].map((link: any) =>
                  this.transformLink(link, field.items!.linkType)
                )
              );
              break;
            case "RichText":
              res[id] = documentToHtmlString(res[id], {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: (node) => {
                    const { file, title, description } =
                      node.data.target.fields;
                    return `
                      <div class="column-center long-form-embed">
                          <img src="https:${file.url}?w=1200" alt="${title}" />
                          ${
                            description !== undefined
                              ? `<span>${description}</span>`
                              : ""
                          }
                      </div>
                    `;
                  },
                  [INLINES.HYPERLINK]: (node) => {
                    if (node.data.uri.includes("youtube.com/embed")) {
                      return `<div class="iframe-container row-center">
                        <div class="iframe-box">
                          <iframe
                            title="Demo"
                            src=${node.data.uri}
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>`;
                    } else {
                      return `<a href=${node.data.uri}>${documentToHtmlString(
                        node as any
                      )}</a>`;
                    }
                  },
                },
              });
              break;
          }
        })
    );

    return res;
  }

  async transformLink(link: any, type: string | undefined): Promise<any> {
    if (this.client === undefined) {
      this.client = await this.build();
    }

    switch (type) {
      case "Asset":
        return link.src !== undefined // why do I need to do this?
          ? link
          : { src: `https:${link.fields.file.url}`, alt: link.fields.title };

      case "Entry":
        return await this.serialize(
          link,
          await this.client.getContentType(link.sys.contentType.sys.id)
        );

      case undefined:
        return link;
    }
  }
}
