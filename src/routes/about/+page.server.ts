import { contentWrapper } from "$lib/server/contentful";
import type { Member, TestimonialMember } from "$lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    title: "About Us",
    testimonialMember: getTestimonialMember(),
  };
};

async function getTestimonialMember() {
  const members: Member[] = await contentWrapper.get("member");
  const testimonialMembers = members.filter(
    (member) => member.testimonial !== undefined
  ) as TestimonialMember[];

  const featuredTestimonialMember =
    testimonialMembers[Math.floor(Math.random() * testimonialMembers.length)];

  return featuredTestimonialMember;
}
