import { contentWrapper } from "$hooks";
import type { Project } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const projects: Project[] = await contentWrapper.get("project", {
    "fields.featured": true,
  });

  for (let i = projects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [projects[i], projects[j]] = [projects[j], projects[i]];
  }

  return {
    body: projects
      .slice(0, 4)
      .map(
        ({ name, summary, slug, accentColor, nonprofitLogo, headerImage }) => ({
          name,
          summary,
          slug,
          accentColor,
          nonprofitLogo,
          headerImage,
        })
      ),
  };
};
