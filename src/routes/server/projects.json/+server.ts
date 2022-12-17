import { json } from "@sveltejs/kit";
import { contentWrapper } from "src/hooks.server";
import { generateProjectsInfo } from "src/lib/utils/projects";
import type { Project } from "src/lib/utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const projects: Project[] = await contentWrapper.get("project", {
    order: "fields.name",
    limit: 1000,
  });

  const strippedProjects = projects.map(
    ({
      name,
      summary,
      slug,
      accentColor,
      nonprofitLogo,
      semester,
      featured,
      headerImage,
    }) => ({
      name,
      summary,
      slug,
      accentColor,
      nonprofitLogo,
      semester,
      featured,
      headerImage,
    })
  );

  const projectsInfo = generateProjectsInfo(strippedProjects as Project[]);

  throw new Error(
    "@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)"
  );
  // Suggestion (check for correctness before using):
  // return json(projectsInfo);
  return {
    body: projectsInfo,
  };
};
