import Accordion from "$components/Accordion.svelte";
import Button from "$components/Button.svelte";
import Head from "$components/Head.svelte";
import Icon from "$components/Icon.svelte";
import Row from "$components/Row.svelte";
import Section from "$components/Section.svelte";
import Step from "$components/Step.svelte";
import Testimonial from "$components/Testimonial.svelte";

import type {
  FAQ,
  Image,
  Info,
  NonprofitStep,
  NonprofitTestimonialProject,
} from "src/lib/utils/schema";
import type { PageLoad } from "@sveltejs/kit";

export const load: PageLoad = async ({ fetch }) => {
  const [applicationSteps, faqs, testimonialNonprofit, info] =
    (await Promise.all([
      fetch("/server/nonprofit-steps.json").then((res: Response) => res.json()),
      fetch("/server/work-faq.json").then((res: Response) => res.json()),
      fetch("/server/nonprofit-testimonial.json").then((res: Response) =>
        res.json()
      ),
      fetch("/server/info.json").then((res: Response) => res.json()),
    ])) as [NonprofitStep[], FAQ[], NonprofitTestimonialProject, Info];

  return {
    faqs,
    applicationSteps,
    testimonialNonprofit,
    projectsImage: info.homepagePartnerships,
  };
};
