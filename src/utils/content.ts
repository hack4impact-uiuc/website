import fetch from "node-fetch";

export default async function genRequest(query: string): Promise<any> {
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

  const json = await res.json();

  return json.data;
}

fetch;
