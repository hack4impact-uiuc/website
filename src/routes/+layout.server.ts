import { contentWrapper } from "$lib/server/contentful";
import { generateProjectsInfo } from "$lib/utils/projects";
import type { Project } from "$lib/utils/schema";
import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  const projects: Project[] = await contentWrapper.get("project");

  const { semesters } = generateProjectsInfo(projects);

  return {
    semesters,
  };
};
