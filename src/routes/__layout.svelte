<script context="module" lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { generateProjectsInfo } from "$lib/utils/projects";
  import type { Project } from "$lib/utils/schema";

  export async function load({ page, fetch }) {
    const res = await fetch("/server/projects.json");

    const projects: Project[] = await res.json();
    const { semesters } = generateProjectsInfo(projects);

    return { props: { semesters, path: page.path } };
  }
</script>

<script lang="ts">
  export let semesters: string[] = [];

  export let path: string;
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta name="twitter:domain" value="https://uiuc.hack4impact.org" />
</svelte:head>

<Nav path="{path}" />

<main>
  <slot />
</main>

<Footer semesters="{semesters}" />
