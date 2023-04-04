import type { ContentWrapper } from "$lib/utils/api";
import { shuffleArray } from "$lib/utils/projects";
import type { Project } from "$lib/utils/schema";

export function load({ locals }) {
  return {
    projects: getFeaturedProjects(locals.contentWrapper),
  };
}

async function getFeaturedProjects(contentWrapper: ContentWrapper) {
  const projects: Project[] = await contentWrapper.get("project", {
    "fields.featured": true,
  });

  shuffleArray(projects);

  return projects.slice(0, 4);
}
