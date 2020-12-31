import genRequest from "../utils/content";
import type { Response, Request } from "express";

export async function get(_: Request, res: Response): Promise<void> {
  const projects = await genRequest(`
			{
				uiucProjectCollection {
					items {
						name

					}
				}
			}`);

  if (projects.success === true) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(projects.result.uiucProjectCollection.items));
  } else {
    res.writeHead(projects.status);
    res.end();
  }
}
