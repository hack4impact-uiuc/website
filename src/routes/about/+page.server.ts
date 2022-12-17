import { contentWrapper } from "$lib/server/contentful";
import type { Info, Member, TestimonialMember } from "$lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    info: contentWrapper
      .get("info")
      .then((infoList) => infoList[0]) as Promise<Info>,
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
