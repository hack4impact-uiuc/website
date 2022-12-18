import { contentWrapper } from "$lib/content/contentful";
import { setImageHeight, titleCase, type Member } from "$lib/utils/schema";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params, fetch, url }) => {
  const contentfulName = titleCase(params.name.replace("_", " "));

  const members: Member[] = await contentWrapper.get("member", {
    "fields.name": contentfulName,
  });

  if (members.length === 0) {
    throw error(404);
  }

  const member = members[0];

  let imageURL = member.picture.src;
  const imageHeight = url.searchParams.get("h");
  if (imageHeight) {
    imageURL = setImageHeight(imageURL, Number(imageHeight));
  }

  return fetch(imageURL);
};
