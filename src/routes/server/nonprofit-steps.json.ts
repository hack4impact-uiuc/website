import { contentWrapper } from "$hooks";
import type { NonprofitStep } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const nonprofitSteps: NonprofitStep[] = await contentWrapper.get(
    "nonprofitStep",
    {
      order: "fields.order",
    }
  );

  return {
    body: nonprofitSteps,
  };
};
