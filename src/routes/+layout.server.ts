import { contentWrapper } from "$lib/content/contentful";
import { generateProjectsInfo } from "$lib/utils/projects";
import type { Info, Project } from "$lib/utils/schema";
import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  return {
    semesters: getSemesters(),
    info: contentWrapper
      .get("info")
      .then((infoList) => infoList[0]) as Promise<Info>,
  };
};

async function getSemesters() {
  const projects: Project[] = await contentWrapper.get("project");

  const { semesters } = generateProjectsInfo(projects);

  return semesters;
}
