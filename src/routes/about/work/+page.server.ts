import { contentWrapper } from "$lib/server/contentful";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    title: "How We Work",
    faqs: contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Work",
    }),
  };
};
