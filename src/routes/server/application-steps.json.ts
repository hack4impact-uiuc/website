import { contentWrapper } from "$lib/hooks";
import type { ApplicationStep } from "$lib/utils/schema";

export async function get(): Promise<any> {
  const applicationSteps: ApplicationStep[] = await contentWrapper.get(
    "applicationStep",
    {
      order: "fields.startDate,fields.name",
    }
  );

  return {
    body: applicationSteps,
  };
}
