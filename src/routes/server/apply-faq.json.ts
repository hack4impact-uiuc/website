import type { Response, Request } from "express";
import { contentWrapper } from "../../server";
import type { FAQ } from "../../utils/schema";

export async function get(_: Request, res: Response): Promise<void> {
  const faqs: FAQ[] = await contentWrapper.get("faq", {
    order: "fields.order",
    "fields.category": "Apply",
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(faqs));
}
