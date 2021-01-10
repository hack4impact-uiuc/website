import type { Response, Request } from "express";
import { contentWrapper } from "../server";

export async function get(_: Request, res: Response): Promise<void> {
  const projects = await contentWrapper.get("project", {
    "fields.featured": true,
  });

  for (let i = projects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [projects[i], projects[j]] = [projects[j], projects[i]];
  }

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(projects));
}
