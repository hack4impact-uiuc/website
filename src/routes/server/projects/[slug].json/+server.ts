import { contentWrapper } from "src/hooks.server";
import type { Project } from "src/lib/utils/schema";
import type { RequestHandler } from "../$types";

export const GET: RequestHandler = async ({ params }) => {
  const projects: Project[] = await contentWrapper.get("project", {
    "fields.slug": params.slug,
  });

  if (projects?.length > 0) {
    throw new Error(
      "@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)"
    );
    // Suggestion (check for correctness before using):
    // return new Response(projects[0]);
    return {
      body: projects[0],
    };
  } else {
    return new Response(undefined, { status: 404 });
  }
};
