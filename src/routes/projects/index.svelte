<script context="module" lang="ts">
  import Section from "../../components/Section.svelte";
  import FeaturedBanner from "../../components/projects/FeaturedBanner.svelte";
  import ProjectCard from "../../components/projects/ProjectCard.svelte";
  import { generateProjectsInfo } from "../../utils/projects";
  import type { SemesterProjects } from "../../utils/projects";
  import type { Project } from "../../utils/schema";

  export async function preload() {
    const res = await this.fetch(`server/projects.json`);

    const projects: Project[] = await res.json();

    return generateProjectsInfo(projects);
  }
</script>

<script lang="ts">
  export let projectMap: Record<string, SemesterProjects>;
  export let semesters: string[];
</script>

<svelte:head>
  <title>Projects | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="60px">
  <h1>Projects</h1>
  {#each semesters as semester}
    <div id={semester} class="semester-section">
      <h2>{semester}</h2>
      {#if projectMap[semester].featured !== undefined}<FeaturedBanner
          project={projectMap[semester].featured}
        />{/if}
      <div class="project-grid">
        {#each projectMap[semester].projects as project}
          <ProjectCard {project} />
        {/each}
      </div>
    </div>
  {/each}
</Section>

<style>
  .semester-section {
    margin: 40px 0;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 50px;
    row-gap: 50px;
  }
</style>
