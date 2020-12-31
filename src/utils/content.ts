export default async function genRequest(
  fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>,
  query: string,
  SPACE: string,
  TOKEN: string
): Promise<any> {
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
