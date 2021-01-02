<script context="module" lang="ts">
  import Section from "../../components/Section.svelte";
  import type { Project } from "../../utils/schema";

  export async function preload({ params }) {
    const { slug } = params;
    const res = await this.fetch(`projects/${slug}.json`);

    if (res.ok) {
      const project: Project = await res.json();
      return { project };
    } else {
      this.error(res.status, res.statusText);
    }
  }
</script>

<script lang="ts">
  export let project: Project;
</script>

<style>
</style>

<Section color={project.accentColor}>
  <h1>{project.name}</h1>
  <h2>{project.summary}</h2>
</Section>
