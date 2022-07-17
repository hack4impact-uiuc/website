import { contentWrapper } from "$hooks";
import { generateProjectsInfo } from "$utils/projects";
import type { Project } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const projects: Project[] = await contentWrapper.get("project");

  const projectsInfo = generateProjectsInfo(projects);

  return {
    body: projectsInfo.semesters,
  };
};
