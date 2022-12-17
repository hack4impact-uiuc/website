import { contentWrapper } from "$lib/server/contentful";
import { shuffleArray } from "$lib/utils/projects";
import type { Info, Project } from "$lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    info: contentWrapper
      .get("info")
      .then((infoList) => infoList[0]) as Promise<Info>,
    projects: getFeaturedProjects(),
  };
};

async function getFeaturedProjects() {
  const projects: Project[] = await contentWrapper.get("project", {
    "fields.featured": true,
  });

  shuffleArray(projects);

  return projects.slice(0, 4);
}
