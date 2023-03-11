import { getTestimonialNonprofit } from "$lib/content/contentful";
import type { FAQ, NonprofitStep } from "$lib/utils/schema";

export function load({ locals }) {
  return {
    title: "Nonprofits",
    faqs: locals.contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Work",
    }) as Promise<FAQ[]>,
    applicationSteps: locals.contentWrapper.get("nonprofitStep", {
      order: "fields.order",
    }) as Promise<NonprofitStep[]>,
    testimonialNonprofit: getTestimonialNonprofit(locals.contentWrapper),
  };
}
