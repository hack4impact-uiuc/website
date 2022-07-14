import { contentWrapper } from "$hooks";
import type { FAQ } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const faqs: FAQ[] = await contentWrapper.get("faq", {
    order: "fields.order",
    "fields.category": "Work",
  });

  return {
    body: faqs,
  };
};
