import { json } from "@sveltejs/kit";
import { contentWrapper } from "src/hooks.server";
import type { NonprofitStep } from "src/lib/utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const nonprofitSteps: NonprofitStep[] = await contentWrapper.get(
    "nonprofitStep",
    {
      order: "fields.order",
    }
  );

  throw new Error(
    "@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)"
  );
  // Suggestion (check for correctness before using):
  // return json(nonprofitSteps);
  return {
    body: nonprofitSteps,
  };
};
