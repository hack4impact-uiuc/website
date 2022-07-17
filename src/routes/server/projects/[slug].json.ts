import { contentWrapper } from "$hooks";
import type { Project } from "$utils/schema";
import type { RequestHandler } from "./__types/[slug].json";

export const GET: RequestHandler = async ({ params }) => {
  const projects: Project[] = await contentWrapper.get("project", {
    "fields.slug": params.slug,
  });

  if (projects?.length > 0) {
    return {
      body: projects[0],
    };
  } else {
    return {
      status: 404,
    };
  }
};
