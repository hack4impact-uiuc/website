import { contentWrapper } from "$lib/content/contentful";
import { setImageHeight, type Project } from "$lib/utils/schema";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params, fetch, url }) => {
  const projects: Project[] = await contentWrapper.get("project", {
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
};
