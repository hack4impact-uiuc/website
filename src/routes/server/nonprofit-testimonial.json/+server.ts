import { json } from "@sveltejs/kit";
import { contentWrapper } from "src/hooks.server";
import type {
  Project,
  NonprofitTestimonialProject,
} from "src/lib/utils/schema";
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

  return json({
    testimonial,
    testimonialSourceName,
    testimonialSourceDescription,
    testimonialSourceImage,
  });
};
