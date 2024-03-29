import type { ApplicationStep, FAQ, Role } from "$lib/utils/schema";

export function load({ locals }) {
  return {
    title: "Students",
    faqs: locals.contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Apply",
    }) as Promise<FAQ[]>,
    visibleRoles: locals.contentWrapper.get("role", {
      order: "-fields.open",
      "fields.visible": true,
    }) as Promise<Role[]>,
    applicationSteps: locals.contentWrapper.get("applicationStep", {
      order: "fields.startDate,fields.name",
    }) as Promise<ApplicationStep[]>,
  };
}
