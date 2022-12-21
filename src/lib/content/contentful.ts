import {
  CONTENTFUL_DELIVERY_KEY,
  CONTENTFUL_SPACE_ID,
} from "$env/static/private";
import { ContentWrapper } from "$lib/utils/api";
import type { NonprofitTestimonialProject, Project } from "$lib/utils/schema";

export const contentWrapper = new ContentWrapper(
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_KEY
);

export async function getTestimonialNonprofit(): Promise<NonprofitTestimonialProject> {
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
