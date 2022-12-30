import { error } from "@sveltejs/kit";
import type { Project } from "src/lib/utils/schema";
import type { PageServerLoad } from "./$types";

// Prerender all projects found by SvelteKit crawler (displayed in projects page)
// But include server-side JS to load any projects not found (preview projects)
export const prerender = "auto";

export const load: PageServerLoad = async ({ params, locals }) => {
  const projects: Project[] = await locals.contentWrapper.get(
    "project",
    {
      "fields.slug": params.slug,
    },
    { allowPreview: true }
  );

  if (projects.length === 0) {
    throw error(404);
  }

  const project = projects[0];

  // Default to colorful logo if no white version exists
  if (!project.logoWhite) {
    project.logoWhite = project.nonprofitLogo;
  }

  return {
    title: project.name,
    project,
  };
};
