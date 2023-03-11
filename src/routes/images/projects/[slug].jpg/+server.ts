import { setImageHeight, type Project } from "$lib/utils/schema";
import { error } from "@sveltejs/kit";

export async function GET({ params, fetch, url, locals }) {
  const projects: Project[] = await locals.contentWrapper.get("project", {
    "fields.slug": params.slug,
  });

  if (projects.length === 0) {
    throw error(404);
  }

  const project = projects[0];

  let imageURL = project.headerImage?.src ?? project.nonprofitLogo.src;
  const imageHeight = url.searchParams.get("h");
  if (imageHeight) {
    imageURL = setImageHeight(imageURL, Number(imageHeight));
  }

  return fetch(imageURL);
}
