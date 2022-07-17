import { contentWrapper } from "$hooks";
import type { Role } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const faqs: Role[] = await contentWrapper.get("role", {
    order: "fields.name",
    "fields.open": true,
  });

  return {
    body: faqs,
  };
};
