import { contentWrapper } from "$lib/hooks";
import type { NonprofitStep } from "$lib/utils/schema";

export async function get(): Promise<any> {
  const nonprofitSteps: NonprofitStep[] = await contentWrapper.get(
    "nonprofitStep",
    {
      order: "fields.order",
    }
  );

  return {
    body: nonprofitSteps,
  };
}
