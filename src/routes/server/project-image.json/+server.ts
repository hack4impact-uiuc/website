import { contentWrapper } from "src/hooks.server";
import type { Project } from "src/lib/utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const projects: Project[] = await contentWrapper.get("project", {
    "fields.featured": true,
  });

  const headerImageProjects = projects.filter(
    (project) => project.headerImage !== undefined
  );

  const headerImageProject =
    headerImageProjects[Math.floor(Math.random() * headerImageProjects.length)];

  throw new Error(
    "@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)"
  );
  // Suggestion (check for correctness before using):
  // return new Response(headerImageProject.headerImage);
  return {
    body: headerImageProject.headerImage,
  };
};
