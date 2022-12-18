import { contentWrapper } from "$lib/content/contentful";
import { generateProjectsInfo } from "$lib/utils/projects";
import type { Project } from "$lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    title: "Projects",
    projectsInfo: getProjectsInfo(),
  };
};

async function getProjectsInfo() {
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
