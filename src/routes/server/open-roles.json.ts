import type { Response, Request } from "express";
import { contentWrapper } from "../../server";
import type { Role } from "../../utils/schema";

export async function get(_: Request, res: Response): Promise<void> {
  const faqs: Role[] = await contentWrapper.get("role", {
    order: "fields.name",
    "fields.open": true,
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(faqs));
}
