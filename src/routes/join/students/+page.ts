import Accordion from "$components/Accordion.svelte";
import Button from "$components/Button.svelte";
import Head from "$components/Head.svelte";
import Row from "$components/Row.svelte";
import Section from "$components/Section.svelte";
import Step from "$components/Step.svelte";
import type {
  ApplicationStep,
  FAQ,
  Image,
  Info,
  Role,
} from "src/lib/utils/schema";
import type { IconType } from "$components/Icon.svelte";
import type { PageLoad } from "@sveltejs/kit";

export const load: PageLoad = async ({ fetch }) => {
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
