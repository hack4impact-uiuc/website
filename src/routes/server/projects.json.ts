import { contentWrapper } from "$hooks";
import { generateProjectsInfo } from "$utils/projects";
import type { Project } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const projects: Project[] = await contentWrapper.get("project", {
    order: "fields.name",
    limit: 1000,
  });

  const strippedProjects = projects.map(
    ({
      name,
      summary,
      slug,
      accentColor,
      nonprofitLogo,
      semester,
      featured,
      headerImage,
    }) => ({
      name,
      summary,
      slug,
      accentColor,
      nonprofitLogo,
      semester,
      featured,
      headerImage,
    })
  );

  const projectsInfo = generateProjectsInfo(strippedProjects as Project[]);

  return {
    body: projectsInfo,
  };
};
