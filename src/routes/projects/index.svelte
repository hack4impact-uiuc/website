<script context="module" lang="ts">  
  import Section from "../../components/Section.svelte";
  import FeaturedBanner from "../../components/projects/FeaturedBanner.svelte";
  import ProjectCard from "../../components/projects/ProjectCard.svelte";
  import viewport from '../../utils/useViewportAction';
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

  let currentSemester: number = 0;

  const setSemester = (newSection: number) => currentSemester = newSection
  const idFromSemester = (semester: string) => semester.split(' ').join('-').toLowerCase()
</script>

<svelte:head>
  <title>Projects | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="60px">
  <h1>Projects</h1>
  <div class="col-wrapper">
    <aside>
      <ul>
        {#each semesters as semester, idx}
          <li>
            <a 
              href={`projects/#${idFromSemester(semester)}`}
              on:click={() => {setSemester(idx)}}
              class:active={currentSemester === idx}>
              {semester}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
    <article>
      {#each semesters as semester, idx}
        <section
          class="semester-section"
        >
          <span class="scroll-anchor" id={idFromSemester(semester)} />
          <h2>{semester}</h2>
          {#if projectMap[semester].featured !== undefined}<FeaturedBanner
              project={projectMap[semester].featured}
            />{/if}
          <span use:viewport on:enterViewport={() => setSemester(idx)} />
          <div class="project-grid">
            {#each projectMap[semester].projects as project}
              <ProjectCard {project} />
            {/each}
          </div>
        </section>
      {/each}
      </article>
  </div>
</Section>

<style>
  .semester-section {
    margin: 40px 0;
    position: relative;
  }

  .semester-section .scroll-anchor {
    position: absolute;
    top: -87px;
  }

  .semester-section:first-child {
    margin-top: 0;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 50px;
    row-gap: 50px;
  }

  .col-wrapper {
    position: relative;
    overflow: visible;
    height: 100%;
    display: grid;
    width: 100%;
    grid-template-columns: 215px 1fr;
    grid-template-rows: 1fr;
  }

  @media only screen and (max-width: 1000px) {
    .col-wrapper {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr, 1fr;
    }
  }

  aside {
    margin-right: 45px;
    position: sticky;
    align-self: start;
    top: 20vh;
  }

  @media only screen and (max-width: 1000px) {
    aside {
      margin: 0;
      top: calc(67px);
      left: 0;
      padding: 1.5em 0;
      background-color: #fff;
      border-bottom: 1px solid var(--gray-light);
      z-index: 1;
    }

    article {
      margin-top: 2em;
    }
  }


  aside ul {
    list-style: none;
    padding-left: 0;
    margin: 0;

    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }

  @media only screen and (min-width: 1001px) {
    aside ul {
      padding-left: calc(2em + 6px);
    }

  }
  aside ul li {
    position: relative;
    font-size: 20px;
    margin: 0 0 11px;
  }

  @media only screen and (max-width: 1000px) {
    aside ul li {
      display: inline-block;
      margin: 0;
    }

    aside ul li + li {
      margin-left: 1em;
    }

  }

  aside ul li > a {
    text-decoration: none;
  }

  aside ul li > a.active {
    font-weight: 600;
  }

  @media only screen and (min-width: 1001px) {
    aside ul li > a.active::before {
      content: '—';
      position: absolute;
      left: calc((1.4em + 6px) * -1);
    }

  }
</style>
