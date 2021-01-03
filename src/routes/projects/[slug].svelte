<script context="module" lang="ts">
  import DoubleBanner from "../../components/DoubleBanner.svelte";
  import { pSBC } from "../../utils/color";
  import type { Project } from "../../utils/schema";

  export async function preload({ params }) {
    const { slug } = params;
    const res = await this.fetch(`projects/${slug}.json`);

    const project: Project = await res.json();
    return { project };
  }
</script>

<script lang="ts">
  export let project: Project;
</script>

<style>
</style>

<svelte:head>
  <title>{project.name} | Hack4Impact UIUC</title>
</svelte:head>

<DoubleBanner
  leftColor={project.accentColor}
  rightColor={pSBC(-0.2, project.accentColor)}>
  <h1>{project.name}</h1>
  <h2>{project.summary}</h2>
</DoubleBanner>
