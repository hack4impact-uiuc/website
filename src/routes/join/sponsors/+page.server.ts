import {
  contentWrapper,
  getTestimonialNonprofit,
} from "$lib/content/contentful";
import type { FAQ } from "$lib/utils/schema";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    title: "Sponsors",
    faqs: contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Sponsor",
    }) as Promise<FAQ[]>,
    testimonialNonprofit: getTestimonialNonprofit(),
  };
};
