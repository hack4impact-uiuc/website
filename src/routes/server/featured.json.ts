import { contentWrapper } from "../../hooks";
import type { Project } from "../../utils/schema";

export async function get(): Promise<any> {
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

  return {
    body: projects,
  };
}
