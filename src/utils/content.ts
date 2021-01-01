import { createClient, ContentfulClientApi } from "contentful";

export interface Project {
  name: string;
}

export class ContentWrapper {
  client: ContentfulClientApi;

  constructor(space: string, accessToken: string) {
    this.client = createClient({
      space,
      accessToken,
    });
  }

  async get<T>(entity: string, options: any = {}): Promise<T[]> {
    return this.client
      .getEntries({ content_type: entity, ...options })
      .then((entries) => entries.items.map((entry) => entry.fields as T));
  }
}
