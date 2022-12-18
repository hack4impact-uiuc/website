import { contentWrapper } from "$lib/content/contentful";
import type { Member } from "src/lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    title: "The Team",
    members: getMembers(),
  };
};

async function getMembers() {
  const members: Member[] = await contentWrapper.get("member", {
    order: "fields.name",
    limit: 1000,
  });

  const roles = [
    "Co-Founder",
    "Co-Director",
    "Community Director",
    "External Director",
    "Tech Director",
    "Product Manager",
    "Product Research Lead",
    "Tech Lead",
    "Academy Lead",
    "Product Designer",
    "Software Developer",
    "Academy Member",
  ];

  members.sort((a, b) => a.graduationYear - b.graduationYear);
  members.sort((a, b) => roles.indexOf(a.role) - roles.indexOf(b.role));

  return {
    active: members.filter((member) => member.active),
    alumni: members.filter((member) => !member.active),
  };
}
