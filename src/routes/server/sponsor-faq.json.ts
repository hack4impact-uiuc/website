import { contentWrapper } from "$hooks";
import type { FAQ } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const faqs: FAQ[] = await contentWrapper.get("faq", {
    order: "fields.order",
    "fields.category": "Sponsor",
  });

  return {
    body: faqs,
  };
};
