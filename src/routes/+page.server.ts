import { contentWrapper } from "$lib/server/contentful";
import { shuffleArray } from "$lib/utils/projects";
import type { Project } from "$lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
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
