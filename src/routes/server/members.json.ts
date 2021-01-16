import type { Response, Request } from "express";
import { contentWrapper } from "../../server";
import type { Project } from "../../utils/schema";

export async function get(_: Request, res: Response): Promise<void> {
  const projects: Project[] = await contentWrapper.get("member", {
    order: "fields.name",
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(projects));
}
