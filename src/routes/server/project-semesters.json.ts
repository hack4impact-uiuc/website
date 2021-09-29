import { contentWrapper } from "$lib/hooks";
import { generateProjectsInfo } from "$lib/utils/projects";
import type { Project } from "$lib/utils/schema";

export async function get(): Promise<any> {
  const projects: Project[] = await contentWrapper.get("project");

  const projectsInfo = generateProjectsInfo(projects);

  return {
    body: projectsInfo.semesters,
  };
}
