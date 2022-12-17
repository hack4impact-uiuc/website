import { json } from "@sveltejs/kit";
import { contentWrapper } from "src/hooks.server";
import type { FAQ } from "src/lib/utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const faqs: FAQ[] = await contentWrapper.get("faq", {
    order: "fields.order",
    "fields.category": "Apply",
  });

  throw new Error(
    "@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)"
  );
  // Suggestion (check for correctness before using):
  // return json(faqs);
  return {
    body: faqs,
  };
};
