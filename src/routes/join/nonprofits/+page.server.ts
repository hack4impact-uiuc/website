import { contentWrapper } from "$lib/server/contentful";
import type {
  NonprofitTestimonialProject,
  Project,
} from "src/lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    title: "Nonprofits",
    faqs: contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Work",
    }),
    applicationSteps: contentWrapper.get("nonprofitStep", {
      order: "fields.order",
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
