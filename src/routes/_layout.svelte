<script context="module" lang="ts">
  import { stores } from "@sapper/app";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import { generateProjectsInfo } from "../utils/projects";
  import type { Project } from "../utils/schema";

  export async function preload() {
    const res = await this.fetch(`server/projects.json`);

    const projects: Project[] = await res.json();
    const { semesters } = generateProjectsInfo(projects);

    return { semesters };
  }
</script>

<script lang="ts">
  const { page } = stores();

  export let segment: string;
  export let semesters: string[] = [];

  let path = "";
  $: path = $page.path;
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta name="twitter:domain" value="https://h4iuiuc.netlify.app" />
</svelte:head>

<Nav segment="{segment}" path="{path}" />

<main>
  <slot />
</main>

<Footer semesters="{semesters}" />
