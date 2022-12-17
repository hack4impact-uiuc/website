import { json } from "@sveltejs/kit";
import { contentWrapper } from "src/hooks.server";
import type { Member, TestimonialMember } from "src/lib/utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const members: Member[] = await contentWrapper.get("member");
  const testimonialMembers = members.filter(
    (member) => member.testimonial !== undefined
  ) as TestimonialMember[];

  const featuredTestimonialMember =
    testimonialMembers[Math.floor(Math.random() * testimonialMembers.length)];

  throw new Error(
    "@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)"
  );
  // Suggestion (check for correctness before using):
  // return json(featuredTestimonialMember);
  return {
    body: featuredTestimonialMember,
  };
};
