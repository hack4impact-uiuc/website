import { contentWrapper } from "$lib/hooks";
import type { Project } from "$lib/utils/schema";

export async function get(): Promise<any> {
  const projects: Project[] = await contentWrapper.get("project", {
    "fields.featured": true,
  });

  const headerImageProjects = projects.filter(
    (project) => project.headerImage !== undefined
  );

  const headerImageProject =
    headerImageProjects[Math.floor(Math.random() * headerImageProjects.length)];

  return {
    body: headerImageProject.headerImage,
  };
}
