import { contentWrapper } from "$hooks";
import type { Member, TestimonialMember } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const members: Member[] = await contentWrapper.get("member");
  const testimonialMembers = members.filter(
    (member) => member.testimonial !== undefined
  ) as TestimonialMember[];

  const featuredTestimonialMember =
    testimonialMembers[Math.floor(Math.random() * testimonialMembers.length)];

  return {
    body: featuredTestimonialMember,
  };
};
