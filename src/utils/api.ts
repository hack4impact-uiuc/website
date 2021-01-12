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
      entries.items.map(async (entry) => (await serialize(entry, schema)) as T)
    );
  }
}

async function serialize<T>(entry: Entry<T>, schema: ContentType): Promise<T> {
  const res = entry.fields;

  await Promise.all(
    schema.fields
      .filter(({ id }) => res[id] !== undefined)
      .map(async (field) => {
        const { id, type } = field;

        switch (type) {
          case "Link":
            res[id] = await transformLink(res[id], field.linkType);
            break;
          case "Array":
            res[id] = await Promise.all(
              res[id].map((link) => transformLink(link, field.items.linkType))
            );
            break;
          case "RichText":
            res[id] = documentToHtmlString(res[id]);
            break;
        }
      })
  );

  return res;
}

async function transformLink(link: any, type: string | undefined) {
  switch (type) {
    case "Asset":
      return { src: link.fields.file.url, alt: link.fields.title };

    case "Entry":
      const schema = await this.client.getContentType(link.sys.contentType);
      return await serialize(link, schema);

    case undefined:
      return link;
  }
}
