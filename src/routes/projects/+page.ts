import FeaturedBanner from "$components/projects/FeaturedBanner.svelte";
import Head from "$components/Head.svelte";
import ProjectCard from "$components/projects/ProjectCard.svelte";
import Section from "$components/Section.svelte";
import { semesterToId } from "src/lib/utils/schema";
import viewport from "src/lib/utils/useViewportAction";
import type { ProjectsInfo, SemesterProjects } from "src/lib/utils/projects";
import type { Image, Info } from "src/lib/utils/schema";
import type { PageLoad } from "@sveltejs/kit";

export const load: PageLoad = async ({ fetch }) => {
  const [projectsInfo, info] = (await Promise.all([
    fetch("/server/projects.json").then((res: Response) => res.json()),
    fetch("/server/info.json").then((res: Response) => res.json()),
  ])) as [ProjectsInfo, Info];

  return { ...projectsInfo, projectsImage: info.homepagePartnerships };
};
