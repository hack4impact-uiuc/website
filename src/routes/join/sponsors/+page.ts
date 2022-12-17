import Accordion from "$components/Accordion.svelte";
import Button from "$components/Button.svelte";
import Head from "$components/Head.svelte";
import Icon from "$components/Icon.svelte";
import Row from "$components/Row.svelte";
import Section from "$components/Section.svelte";
import Info from "$components/sponsors/Info.svelte";
import Stats from "$components/sponsors/Stats.svelte";
import Testimonial from "$components/Testimonial.svelte";
import {
  Perk,
  type FAQ,
  type Image,
  type Info as SiteInfo,
  type NonprofitTestimonialProject,
  type PerkType,
} from "src/lib/utils/schema";
import type { PageLoad } from "@sveltejs/kit";

export const load: PageLoad = async ({ fetch }) => {
  const [info, faqs, testimonialNonprofit] = (await Promise.all([
    fetch("/server/info.json").then((res: Response) => res.json()),
    fetch("/server/sponsor-faq.json").then((res: Response) => res.json()),
    fetch("/server/nonprofit-testimonial.json").then((res: Response) =>
      res.json()
    ),
  ])) as [SiteInfo, FAQ[], NonprofitTestimonialProject];

  const { whereWeWork } = info;

  return {
    whereWeWork,
    faqs,
    testimonialNonprofit,
    projectsImage: info.homepagePartnerships,
  };
};
