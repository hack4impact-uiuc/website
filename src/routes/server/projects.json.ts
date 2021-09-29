import { contentWrapper } from "$lib/hooks";
import { generateProjectsInfo } from "$lib/utils/projects";
import type { Project } from "$lib/utils/schema";

export async function get(): Promise<any> {
  const projects: Project[] = await contentWrapper.get("project", {
    order: "fields.name",
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
}
