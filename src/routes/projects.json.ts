import type { Response, Request } from "express";
import { contentWrapper } from "../server";

export async function get(_: Request, res: Response): Promise<void> {
  const projects = await contentWrapper.get("project", {
    order: "fields.name",
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(projects));
}
