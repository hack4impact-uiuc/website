import { contentWrapper } from "$lib/hooks";
import type { Project } from "$lib/utils/schema";

export async function get(): Promise<any> {
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

  return {
    body: projects,
  };
}
