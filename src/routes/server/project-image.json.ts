import { contentWrapper } from "$hooks";
import type { Project } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
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
};
