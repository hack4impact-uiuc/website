import {
  contentWrapper,
  getTestimonialNonprofit,
} from "$lib/content/contentful";
import type { FAQ, NonprofitStep } from "$lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    title: "Nonprofits",
    faqs: contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Work",
    }) as Promise<FAQ[]>,
    applicationSteps: contentWrapper.get("nonprofitStep", {
      order: "fields.order",
    }) as Promise<NonprofitStep[]>,
    testimonialNonprofit: getTestimonialNonprofit(),
  };
};
