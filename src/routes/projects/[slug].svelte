<script context="module" lang="ts">
  import ProjectBanner from "../../components/projects/ProjectBanner.svelte";
  import Section from "../../components/Section.svelte";
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
  :global(h1) {
    font-size: 56px;
  }

  :global(h2) {
    font-size: 32px;
  }

  :global(p) {
    font-size: 20px;
    opacity: 80%;
  }
</style>

<svelte:head>
  <title>{project.name} | Hack4Impact UIUC</title>
</svelte:head>

<ProjectBanner {project} />
<Section color="var(--gray-lighter)" padding="40px">
  <h2>Our Partner</h2>
  <p>{project.nonprofitDescription}</p>
</Section>
<Section padding="40px">
  {@html project.fullDescription}
</Section>
