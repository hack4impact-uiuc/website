import { contentWrapper } from "$lib/hooks";
import type { FAQ } from "$lib/utils/schema";

export async function get(): Promise<any> {
  const faqs: FAQ[] = await contentWrapper.get("faq", {
    order: "fields.order",
    "fields.category": "Sponsor",
  });

  return {
    body: faqs,
  };
}