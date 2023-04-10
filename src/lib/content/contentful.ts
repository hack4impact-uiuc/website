import type { ContentWrapper } from "$lib/utils/api";
import type { Testimonial } from "$lib/utils/schema";

export async function getNonprofitTestimonial(
  contentWrapper: ContentWrapper
): Promise<Testimonial> {
  const testimonials: Testimonial[] = await contentWrapper.get("testimonial");
  const nonprofitTestimonials = testimonials.filter(
    (testimonial) => testimonial.sourceType === "Nonprofit"
  );

  const featuredTestimonial =
    nonprofitTestimonials[
      Math.floor(Math.random() * nonprofitTestimonials.length)
    ];

  return featuredTestimonial;
}
