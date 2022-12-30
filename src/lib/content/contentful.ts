import type { ContentWrapper } from "$lib/utils/api";
import type { NonprofitTestimonialProject, Project } from "$lib/utils/schema";

export async function getTestimonialNonprofit(
  contentWrapper: ContentWrapper
): Promise<NonprofitTestimonialProject> {
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
