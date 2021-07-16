import { contentWrapper } from "../../hooks";
import type { FAQ } from "../../utils/schema";

export async function get(): Promise<any> {
  const faqs: FAQ[] = await contentWrapper.get("faq", {
    order: "fields.order",
    "fields.category": "Work",
  });

  return {
    body: faqs,
  };
}
