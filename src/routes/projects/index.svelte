<script context="module" lang="ts">
  import Section from "../../components/Section.svelte";
  import FeaturedBanner from "../../components/projects/FeaturedBanner.svelte";
  import ProjectCard from "../../components/projects/ProjectCard.svelte";
  import viewport from "../../utils/useViewportAction";
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

  let currentSemester: number = 0;

  const setSemester = (newSection: number) => (currentSemester = newSection);
  const idFromSemester = (semester: string) =>
    semester.split(" ").join("-").toLowerCase();
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
              on:click={() => {
                setSemester(idx);
              }}
              class:active={currentSemester === idx}
            >
              {semester}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
    <article>
      {#each semesters as semester, idx}
        <section class="semester-section">
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
    top: 15vh;
  }

  @media only screen and (max-width: 1000px) {
    aside {
      margin: 0;
      top: calc(67px);
      left: 0;
      padding: 1.5em 0;
      background-color: #fff;
      z-index: 1;
    }

    aside::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: calc((100vw - var(--content-width)) / -2);
      height: 2px;
      background: var(--gray-light);
      width: 100vw;
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
    font-size: 1rem;
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
      content: "—";
      position: absolute;
      left: calc((1.4em + 6px) * -1);
    }
  }
</style>
