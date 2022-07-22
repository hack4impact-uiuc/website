import { contentWrapper } from "$hooks";
import type { Info } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const [info]: Info[] = await contentWrapper.get("info");

  return {
    body: info,
  };
};
