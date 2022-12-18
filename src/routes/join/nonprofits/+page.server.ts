import {
  contentWrapper,
  getTestimonialNonprofit,
} from "$lib/content/contentful";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    title: "Nonprofits",
    faqs: contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Work",
    }),
    applicationSteps: contentWrapper.get("nonprofitStep", {
      order: "fields.order",
    }),
    testimonialNonprofit: getTestimonialNonprofit(),
  };
};
