import type { Response, Request } from "express";
import { contentWrapper } from "../../server";
import type { ApplicationStep } from "../../utils/schema";

export async function get(_: Request, res: Response): Promise<void> {
  const applicationSteps: ApplicationStep[] = await contentWrapper.get(
    "applicationStep",
    {
      order: "fields.startDate,fields.name",
    }
  );

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(applicationSteps));
}
