import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import type { ContentfulClientApi, ContentType, Entry } from "contentful";
import contentful from "contentful";

type ContentWrapperGetOptions = {
  /**
   * Use draft data from the Contentful preview API if the ContentWrapper is authorized to do so.
   */
  allowPreview: boolean;
};

export class ContentWrapper {
  client: ContentfulClientApi;
  previewClient: ContentfulClientApi | undefined;

  constructor(space: string, accessToken: string, previewAccessToken?: string) {
    this.client = contentful.createClient({ space, accessToken });

    if (previewAccessToken) {
      this.previewClient = contentful.createClient({
        space,
        accessToken: previewAccessToken,
        host: "preview.contentful.com",
      });
    }
  }

  async get(
    entity: string,
    contentfulOptions: any = {},
    { allowPreview = false }: ContentWrapperGetOptions = { allowPreview: false }
  ): Promise<any[]> {
    let client = this.client;

    if (allowPreview && this.previewClient) {
      client = this.previewClient;
    }

    const [entries, schema] = await Promise.all([
      client.getEntries({
        content_type: entity,
        ...contentfulOptions,
      }),
      client.getContentType(entity),
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
                    // Add this safety check: If the asset was deleted/unpublished, skip it.
                    if (!node.data?.target?.fields) {
                      return ""; 
                    }
                    
                    const { file, title, description } =
                      node.data.target.fields;
                    return `
                      <div class="column-center long-form-embed">
                          <img loading="lazy" src="https:${
                            file.url
                          }?w=1200" alt="${title}" />
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
    // 1. SAFETY CHECK: Ignore completely empty links
    if (!link || !link.sys) return undefined;

    switch (type) {
      case "Asset":
        if (link.src !== undefined) return link;
        // Safety check for deleted/unpublished assets
        if (!link.fields || !link.fields.file) return undefined; 
        return { src: `https:${link.fields.file.url}`, alt: link.fields.title };

      case "Entry":
        // 2. SAFETY CHECK: If the entry is unpublished/unresolved, skip it
        if (!link.sys.contentType) return undefined; 
        
        return await this.serialize(
          link,
          await this.client.getContentType(link.sys.contentType.sys.id)
        );

      case "Array":
        const transformedArray = await Promise.all(
          res[id].map((link: any) =>
            this.transformLink(link, field.items!.linkType)
          )
        );
        // Filter out any undefined items that were unpublished
        res[id] = transformedArray.filter((item) => item !== undefined);
        break;
        
      case undefined:
        return link;
    }
    
    // switch (type) {
    //   case "Asset":
    //     return link.src !== undefined // why do I need to do this?
    //       ? link
    //       : { src: `https:${link.fields.file.url}`, alt: link.fields.title };

    //   case "Entry":
    //     return await this.serialize(
    //       link,
    //       await this.client.getContentType(link.sys.contentType.sys.id)
    //     );

    //   case undefined:
    //     return link;
    // }
  }
}
