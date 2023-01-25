import type { ContentWrapper } from "$lib/utils/api";
import type { Testimonial } from "$lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ locals }) => {
  return {
    title: "About Us",
    testimonial: getTestimonial(locals.contentWrapper),
  };
};

async function getTestimonial(contentWrapper: ContentWrapper) {
  const testimonials: Testimonial[] = await contentWrapper.get("testimonial");
  const memberTestimonialsAboutH4I = testimonials.filter(
    (testimonial) =>
      testimonial.sourceType === "Member" &&
      testimonial.contentType === "Hack4Impact"
  ) as Testimonial[];

  const featuredTestimonial =
    memberTestimonialsAboutH4I[
      Math.floor(Math.random() * memberTestimonialsAboutH4I.length)
    ];

  return featuredTestimonial;
}
