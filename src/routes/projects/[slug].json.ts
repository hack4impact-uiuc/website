import type { Response, Request } from "express";
import { contentWrapper } from "../../server";

export async function get(req: Request, res: Response): Promise<void> {
  const projects = await contentWrapper.get("uiucProject", {
    "fields.slug": req.params.slug,
  });

  if (projects.length > 0) {

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(projects[0]));
  } else {
    res.writeHead(404);
    res.end();
  }
}
