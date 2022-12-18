import type { ApplicationStep, FAQ, Info, Role } from "src/lib/utils/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const [faqs, visibleRoles, applicationSteps, info] = (await Promise.all([
    fetch("/server/apply-faq.json").then((res: Response) => res.json()),
    fetch("/server/visible-roles.json").then((res: Response) => res.json()),
    fetch("/server/application-steps.json").then((res: Response) => res.json()),
    fetch("/server/info.json").then((res: Response) => res.json()),
  ])) as [FAQ[], Role[], ApplicationStep, Info];

  const { applicationBlurb } = info;

  return {
    faqs,
    visibleRoles,
    applicationSteps,
    applicationBlurb,
    projectsImage: info.homepagePartnerships,
  };
};
