import { contentWrapper } from "$lib/hooks";
import type { Project } from "$lib/utils/schema";

export async function get(): Promise<any> {
  const projects: Project[] = await contentWrapper.get("project");
  const testimonialProjects = projects.filter(
    (project) => project.testimonial !== undefined
  );

  const featuredTestimonialProject =
    testimonialProjects[Math.floor(Math.random() * testimonialProjects.length)];

  return {
    body: featuredTestimonialProject,
  };
}
