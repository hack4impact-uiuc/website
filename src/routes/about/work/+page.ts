import Accordion from "$components/Accordion.svelte";
import Button from "$components/Button.svelte";
import Head from "$components/Head.svelte";
import RoleCard from "$components/RoleCard.svelte";
import Section from "$components/Section.svelte";
import Step from "$components/Step.svelte";
import Row from "$components/Row.svelte";
import type { FAQ, Image, Info } from "src/lib/utils/schema";
import type { PageLoad } from "@sveltejs/kit";

export const load: PageLoad = async ({ fetch }) => {
  const [faqs, info] = (await Promise.all([
    fetch("/server/work-faq.json").then((res: Response) => res.json()),
    fetch("/server/info.json").then((res: Response) => res.json()),
  ])) as [FAQ[], Info];

  return { faqs, projectsImage: info.homepagePartnerships };
};
