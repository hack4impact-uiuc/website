import { contentWrapper } from "$lib/hooks";
import type { Role } from "$lib/utils/schema";

export async function get(): Promise<any> {
  const faqs: Role[] = await contentWrapper.get("role", {
    order: "fields.name",
    "fields.open": true,
  });

  return {
    body: faqs,
  };
}
