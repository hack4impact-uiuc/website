<script context="module" lang="ts">
  import Section from "../../components/Section.svelte";
  import ProjectCard from "../../components/projects/ProjectCard.svelte";
  import { parseSemester } from "../../utils/schema";
  import type { Project } from "../../utils/schema";

  export async function preload() {
    const res = await this.fetch(`projects.json`);

    const projects: Project[] = await res.json();

    const projectMap: Record<string, Project[]> = {};
    const semesters: string[] = [];

    projects.forEach((project) =>
      project.semester.forEach((semester) => {
        if (projectMap[semester] !== undefined) {
          projectMap[semester].push(project);
        } else {
          projectMap[semester] = [project];
          semesters.push(semester);
        }
      })
    );

    semesters.sort((a, b) => {
      const semA = parseSemester(a);
      const semB = parseSemester(b);

      if (semA.year === semB.year) {
        if (semA.season === semB.season) {
          return 0;
        }

        return semB.season < semA.season ? 1 : -1;
      }

      return semB.year - semA.year;
    });

    return { projectMap, semesters };
  }
</script>

<script lang="ts">
  export let projectMap: Record<string, Project[]>;
  export let semesters: string[];
</script>

<style>
  .semester-section {
    margin: 40px 0;
  }

  .semester-projects {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<svelte:head>
  <title>Projects | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="60px">
  <h1>Projects</h1>
  {#each semesters as semester}
    <div id={semester} class="semester-section">
      <h2>{semester}</h2>
      <div class="semester-projects">
        {#each projectMap[semester] as project}
          <ProjectCard {project} />
        {/each}
      </div>
    </div>
  {/each}
</Section>
