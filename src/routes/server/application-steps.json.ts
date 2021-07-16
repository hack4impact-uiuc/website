import { contentWrapper } from "../../hooks";
import type { ApplicationStep } from "../../utils/schema";

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
