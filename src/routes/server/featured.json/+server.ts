import { contentWrapper } from "src/hooks.server";
import type { Project } from "src/lib/utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const projects: Project[] = await contentWrapper.get("project", {
    "fields.featured": true,
  });

  for (let i = projects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [projects[i], projects[j]] = [projects[j], projects[i]];
  }

  throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
  // Suggestion (check for correctness before using):
  // return new Response(projects
.slice(0, 4)
.map(
  // ({ name, summary, slug, accentColor, nonprofitLogo, headerImage }) => ({
  //   name,
  //   summary,
  //   slug,
  //   accentColor,
  //   nonprofitLogo,
  //   headerImage,
  // })
));
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
