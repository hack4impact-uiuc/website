import { contentWrapper } from "$hooks";
import type { Project, NonprofitTestimonialProject } from "$utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
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

  const {
    testimonial,
    testimonialSourceName,
    testimonialSourceDescription,
    testimonialSourceImage,
  } = featuredTestimonialProject;

  return {
    body: {
      testimonial,
      testimonialSourceName,
      testimonialSourceDescription,
      testimonialSourceImage,
    },
  };
};
