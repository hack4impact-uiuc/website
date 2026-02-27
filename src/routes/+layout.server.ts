import type { ContentWrapper } from "$lib/utils/api";
import { generateProjectsInfo } from "$lib/utils/projects";
import type { Info, Project } from "$lib/utils/schema";

export const prerender = true;

export function load({ locals }) {
  return {
    semesters: getSemesters(locals.contentWrapper),
    info: locals.contentWrapper
      .get("info")
      .then((infoList) => infoList[0]) as Promise<Info>,
  };
}

async function getSemesters(contentWrapper: ContentWrapper) {
  // const projects: Project[] = await contentWrapper.get("project");

  // OPTIMIZATION: Only fetch the 'semester' field 
  // We use 'select' to filter out images, descriptions, and other heavy data 
  const projects: Project[] = await contentWrapper.get("project", {
    select: "fields.semester,fields.slug", 
  });

  // SAFETY CHECK: Ignore any projects that don't have a semester defined
  const validProjects = projects.filter((project) => project && project.semester);

  const { semesters } = generateProjectsInfo(validProjects);

  return semesters;
}
