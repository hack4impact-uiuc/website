import { contentWrapper } from "$lib/hooks";
import type { Member } from "$lib/utils/schema";

export async function get(): Promise<any> {
  const members: Member[] = await contentWrapper.get("member");
  const testimonialMembers = members.filter(
    (member) => member.testimonial !== undefined
  );

  const featuredTestimonialMember =
    testimonialMembers[Math.floor(Math.random() * testimonialMembers.length)];

  return {
    body: featuredTestimonialMember,
  };
}
