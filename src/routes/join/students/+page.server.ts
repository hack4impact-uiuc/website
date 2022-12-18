import { contentWrapper } from "$lib/server/contentful";
import type { ApplicationStep, FAQ, Role } from "src/lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    title: "Students",
    faqs: contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Apply",
    }) as Promise<FAQ[]>,
    visibleRoles: contentWrapper.get("role", {
      order: "-fields.open",
      "fields.visible": true,
    }) as Promise<Role[]>,
    applicationSteps: contentWrapper.get("applicationStep", {
      order: "fields.startDate,fields.name",
    }) as Promise<ApplicationStep[]>,
  };
};
