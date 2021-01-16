import type { Response, Request } from "express";
import { contentWrapper } from "../../server";
import type { Project } from "../../utils/schema";

export async function get(_: Request, res: Response): Promise<void> {
  const projects: Project[] = await contentWrapper.get("project", {
    order: "fields.name",
  });

  projects.forEach((project) => {
    delete project.nonprofitDescription;
    delete project.fullDescription;
    delete project.productManager;
    delete project.techLead;
    delete project.productDesigner;
    delete project.softwareDevelopers;
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(projects));
}
