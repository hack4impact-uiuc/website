import { getNonprofitTestimonial } from "$lib/content/contentful";
import type { FAQ } from "$lib/utils/schema";

export function load({ locals }) {
  return {
    title: "Sponsors",
    faqs: locals.contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Sponsor",
    }) as Promise<FAQ[]>,
    testimonial: getNonprofitTestimonial(locals.contentWrapper),
  };
}
