import { getNonprofitTestimonial } from "$lib/content/contentful";
import type { FAQ } from "$lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ locals }) => {
  return {
    title: "Sponsors",
    faqs: locals.contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Sponsor",
    }) as Promise<FAQ[]>,
    testimonial: getNonprofitTestimonial(locals.contentWrapper),
  };
};
