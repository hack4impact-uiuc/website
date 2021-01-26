<script context="module" lang="ts">
  import Section from "../../components/Section.svelte";
  import FeaturedBanner from "../../components/projects/FeaturedBanner.svelte";
  import ProjectCard from "../../components/projects/ProjectCard.svelte";
  import { parseSemester } from "../../utils/schema";
  import type { Project } from "../../utils/schema";

  interface SemesterProjects {
    featured?: Project;
    projects: Project[];
  }

  export async function preload() {
    const res = await this.fetch(`server/projects.json`);

    const projects: Project[] = await res.json();

    const projectArrayMap: Record<string, Project[]> = {};
    const projectMap: Record<string, SemesterProjects> = {};
    const semesters: string[] = [];

    projects.forEach((project) =>
      project.semester.forEach((semester) => {
        if (projectArrayMap[semester] !== undefined) {
          projectArrayMap[semester].push(project);
        } else {
          projectArrayMap[semester] = [project];
          semesters.push(semester);
        }
      })
    );

    semesters.forEach((semester) => {
      const projects = projectArrayMap[semester];
      const featuredProjects = projects.filter((project) => project.featured);

      const featured: Project | undefined =
        featuredProjects.length > 0
          ? featuredProjects[
              Math.floor(Math.random() * featuredProjects.length)
            ]
          : undefined;

      projectMap[semester] = {
        featured,
        projects: projects.filter((project) => project !== featured),
      };
    });

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
