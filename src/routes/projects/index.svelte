<script context="module" lang="ts">
  import Section from "../../components/Section.svelte";
  import FeaturedBanner from "../../components/projects/FeaturedBanner.svelte";
  import ProjectCard from "../../components/projects/ProjectCard.svelte";
  import { semesterToId } from "../../utils/schema";
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

  let windowWidth: number | undefined;

  let currentSemester: number = 0;

  const setSemester = (newSection: number) => (currentSemester = newSection);
</script>

<svelte:window bind:innerWidth="{windowWidth}" />

<svelte:head>
  <title>Projects | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="60px">
  <h1>Projects</h1>
  <div class="col-wrapper">
    <aside style="{windowWidth ? `--window-width: ${windowWidth}px` : ''}">
      <ul>
        {#each semesters as semester, idx}
          <li>
            <a
              href="{`projects/#${semesterToId(semester)}`}"
              on:click="{() => {
                setSemester(idx);
              }}"
              class:active="{currentSemester === idx}"
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
          <span class="scroll-anchor" id="{semesterToId(semester)}"></span>
          <h2>{semester}</h2>
          {#if projectMap[semester].featured !== undefined}
            <FeaturedBanner project="{projectMap[semester].featured}" />
          {/if}
          <span use:viewport on:enterViewport="{() => setSemester(idx)}"></span>
          <div class="project-grid">
            {#each projectMap[semester].projects as project}
              <ProjectCard project="{project}" />
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

    .semester-section .scroll-anchor {
      top: -135px;
    }
  }

  aside {
    /* CSS var to swap with JavaScript  */
    --window-width: 100vw;

    margin-right: 45px;
    position: sticky;
    align-self: start;
    top: 15vh;
  }

  @media only screen and (max-width: 1000px) {
    aside {
      margin: 0;
      top: 4.25em;
      left: 0;
      background-color: #fff;
      z-index: 4;

      height: calc(60px + 0.25em);
    }

    aside::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: calc(calc(var(--window-width) - var(--content-width)) / 2 * -1);
      height: 2px;
      background: var(--gray-light);
      width: var(--window-width);
    }

    article {
      margin-top: 2em;
    }
  }

  @media only screen and (max-width: 792px) {
    aside {
      top: 70px;
    }
  }

  aside ul {
    list-style: none;
    padding: 1.5em calc(var(--window-width) / 10 * -1) 1.5em 0;
    margin: 0 0 0
      calc(calc(var(--window-width) - var(--content-width)) / 2 * -1);

    width: var(--window-width);
    overflow-x: auto;
    white-space: nowrap;
    position: absolute;
    bottom: 0;
  }

  @media only screen and (min-width: 1001px) {
    aside ul {
      position: relative;
      width: 100%;
      margin: 0;
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

    aside ul li:first-child {
      margin-left: calc(var(--window-width) * 0.1);
    }
    aside ul li:last-child {
      padding-right: 2em;
    }
  }

  aside ul li > a {
    text-decoration: none;
    opacity: 0.6;
  }

  aside ul li > a.active {
    font-weight: 600;
    opacity: 1;
  }

  @media only screen and (min-width: 1001px) {
    aside ul li > a {
      opacity: 1;
    }
    aside ul li > a.active::before {
      content: "—";
      position: absolute;
      left: calc((1.4em + 6px) * -1);
    }
  }
</style>
