import { contentWrapper } from "$lib/hooks";

export async function get(): Promise<any> {
  const [info] = await contentWrapper.get("info");

  return {
    body: info,
  };
}
