import fetch from "node-fetch";

export type Response =
  | {
      success: true;
      result: any;
    }
  | { success: false; status: number };

export interface Project {
  name: string;
}

export default async function genRequest(query: string): Promise<Response> {
  const TOKEN = process.env.CONTENTFUL_DELIVERY_KEY;
  const SPACE = process.env.CONTENTFUL_SPACE_ID;

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${SPACE}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  if (res.status === 200) {
    const json = await res.json();

    return { success: true as const, result: json.data };
  } else {
    return { success: false as const, status: res.status };
  }
}

fetch;
