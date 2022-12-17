import { contentWrapper } from "src/hooks.server";
import { generateProjectsInfo } from "src/lib/utils/projects";
import type { Project } from "src/lib/utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const projects: Project[] = await contentWrapper.get("project");

  const projectsInfo = generateProjectsInfo(projects);

  throw new Error(
    "@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)"
  );
  // Suggestion (check for correctness before using):
  // return new Response(projectsInfo.semesters);
  return {
    body: projectsInfo.semesters,
  };
};
