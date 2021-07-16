import { contentWrapper } from "../../../hooks";

export async function get({ params }): Promise<any> {
  const projects = await contentWrapper.get("project", {
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
}
