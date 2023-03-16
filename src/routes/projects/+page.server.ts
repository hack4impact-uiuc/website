import type { ContentWrapper } from "$lib/utils/api";
import { generateProjectsInfo } from "$lib/utils/projects";
import type { Project } from "$lib/utils/schema";

export function load({ locals }) {
  return {
    title: "Projects",
    projectsInfo: getProjectsInfo(locals.contentWrapper),
  };
}

async function getProjectsInfo(contentWrapper: ContentWrapper) {
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

  return projectsInfo;
}
