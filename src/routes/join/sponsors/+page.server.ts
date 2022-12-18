import {
  contentWrapper,
  getTestimonialNonprofit,
} from "$lib/content/contentful";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    title: "Sponsors",
    faqs: contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Sponsor",
    }),
    testimonialNonprofit: getTestimonialNonprofit(),
  };
};
