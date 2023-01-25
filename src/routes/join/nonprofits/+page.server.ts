import { getNonprofitTestimonial } from "$lib/content/contentful";
import type { FAQ, NonprofitStep } from "$lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ locals }) => {
  return {
    title: "Nonprofits",
    faqs: locals.contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Work",
    }) as Promise<FAQ[]>,
    applicationSteps: locals.contentWrapper.get("nonprofitStep", {
      order: "fields.order",
    }) as Promise<NonprofitStep[]>,
    testimonial: getNonprofitTestimonial(locals.contentWrapper),
  };
};
