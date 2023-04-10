import type { ContentWrapper } from "$lib/utils/api";
import { shuffleArray } from "$lib/utils/projects";
import type { Testimonial } from "$lib/utils/schema";

export function load({ locals }) {
  return {
    title: "About Us",
    testimonials: getTestimonials(locals.contentWrapper),
  };
}

async function getTestimonials(contentWrapper: ContentWrapper) {
  const testimonials: Testimonial[] = await contentWrapper.get("testimonial");
  const memberTestimonialsAboutH4I = testimonials.filter(
    (testimonial) =>
      testimonial.sourceType === "Member" &&
      testimonial.contentType === "Hack4Impact"
  ) as Testimonial[];

  shuffleArray(memberTestimonialsAboutH4I);

  return memberTestimonialsAboutH4I;
}
