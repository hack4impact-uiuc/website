import { contentWrapper } from "$lib/hooks";
import type { Member } from "$lib/utils/schema";

export async function get(): Promise<any> {
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
    "Tech Lead",
    "Academy Lead",
    "Product Research Lead",
    "Product Designer",
    "Software Developer",
    "Academy Member",
  ];

  members.sort((a, b) => a.graduationYear - b.graduationYear);
  members.sort((a, b) => roles.indexOf(a.role) - roles.indexOf(b.role));

  return {
    body: {
      active: members.filter((member) => member.active),
      alumni: members.filter((member) => !member.active),
    },
  };
}
