<script context="module" lang="ts">
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
  export let segment: string;
  export let semesters: string[] = [];
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer {semesters} />
