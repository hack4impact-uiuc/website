import type { ContentWrapper } from "$lib/utils/api";
import { generateProjectsInfo } from "$lib/utils/projects";
import type { Info, Project } from "$lib/utils/schema";
import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = ({ locals }) => {
  return {
    semesters: getSemesters(locals.contentWrapper),
    info: locals.contentWrapper
      .get("info")
      .then((infoList) => infoList[0]) as Promise<Info>,
  };
};

async function getSemesters(contentWrapper: ContentWrapper) {
  const projects: Project[] = await contentWrapper.get("project");

  const { semesters } = generateProjectsInfo(projects);

  return semesters;
}
