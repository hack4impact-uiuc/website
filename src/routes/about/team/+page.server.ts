import type { ContentWrapper } from "$lib/utils/api";
import type { Member } from "$lib/utils/schema";

export function load({ locals }) {
  return {
    title: "The Team",
    members: getMembers(locals.contentWrapper),
  };
}

async function getMembers(contentWrapper: ContentWrapper) {
  const members: Member[] = await contentWrapper.get("member", {
    order: "fields.name",
    limit: 1000,
  });

  const roles = [
    "Co-Founder",
    "Co-Director",
    "Outreach Director",
    "External Director",
    "Community Director",
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
