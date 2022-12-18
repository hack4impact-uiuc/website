import { contentWrapper } from "$lib/server/contentful";
import type { NonprofitTestimonialProject, Project } from "$lib/utils/schema";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    title: "Sponsors",
    faqs: contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Sponsor",
    }),
    testimonialNonprofit: getTestimonialNonprofit(),
  };
};

async function getTestimonialNonprofit(): Promise<NonprofitTestimonialProject> {
  const projects: Project[] = await contentWrapper.get("project");
  const testimonialProjects = projects.filter(
    (project) =>
      project.testimonial !== undefined &&
      project.testimonialSourceName !== undefined &&
      project.testimonialSourceDescription !== undefined &&
      project.testimonialSourceType === "Nonprofit"
  ) as NonprofitTestimonialProject[];

  const featuredTestimonialProject =
    testimonialProjects[Math.floor(Math.random() * testimonialProjects.length)];

  return featuredTestimonialProject;
}
