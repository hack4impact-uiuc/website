import { contentWrapper } from "$hooks";
import type { ApplicationStep } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const applicationSteps: ApplicationStep[] = await contentWrapper.get(
    "applicationStep",
    {
      order: "fields.startDate,fields.name",
    }
  );

  return {
    body: applicationSteps,
  };
};
