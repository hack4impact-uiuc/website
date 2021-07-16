import { contentWrapper } from "../../hooks";
import type { Member } from "../../utils/schema";

export async function get(): Promise<any> {
  const members: Member[] = await contentWrapper.get("member", {
    order: "fields.name",
  });

  return {
    body: members,
  };
}
