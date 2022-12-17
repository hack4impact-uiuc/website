import { json } from "@sveltejs/kit";

import type { Info } from "src/lib/utils/schema";
import type { RequestHandler } from "@sveltejs/kit";
import { contentWrapper } from "$lib/server/contentful";

export const GET: RequestHandler = async () => {
  const info: Info = await contentWrapper.get("info");

  throw new Error(
    "@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)"
  );
  // Suggestion (check for correctness before using):
  // return json(info);
  return {
    body: info,
  };
};
