import type { Response, Request } from "express";
import { contentWrapper } from "../../server";
import type { Project } from "../../utils/schema";

export async function get(_: Request, res: Response): Promise<void> {
  const projects: Project[] = await contentWrapper.get("project", {
    "fields.featured": true,
  });

  projects.forEach((project) => {
    delete project.nonprofitDescription;
    delete project.fullDescription;
    delete project.productManager;
    delete project.techLead;
    delete project.productDesigner;
    delete project.softwareDevelopers;
  });

  for (let i = projects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [projects[i], projects[j]] = [projects[j], projects[i]];
  }

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(projects));
}
