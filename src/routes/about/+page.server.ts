import type { ContentWrapper } from "$lib/utils/api";
import type { Member, TestimonialMember } from "$lib/utils/schema";

export function load({ locals }) {
  return {
    title: "About Us",
    testimonialMember: getTestimonialMember(locals.contentWrapper),
  };
}

async function getTestimonialMember(contentWrapper: ContentWrapper) {
  const members: Member[] = await contentWrapper.get("member");
  const testimonialMembers = members.filter(
    (member) => member.testimonial !== undefined
  ) as TestimonialMember[];

  const featuredTestimonialMember =
    testimonialMembers[Math.floor(Math.random() * testimonialMembers.length)];

  return featuredTestimonialMember;
}
