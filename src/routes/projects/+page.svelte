<script lang="ts">
  import FeaturedBanner from "$lib/components/projects/FeaturedBanner.svelte";
  import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
  import Section from "$lib/components/Section.svelte";
  import { semesterToId } from "$lib/utils/schema";
  import viewport from "$lib/utils/useViewportAction";

  export let data;

  let windowWidth: number | undefined;

  let currentSemester = 0;

  const setSemester = (newSection: number) => {
    // get scroll direction for offset
    const isAscending = currentSemester - newSection < 0;

    // set active semester
    currentSemester = newSection;

    // make active semester link visible
    const currentSemesterDOM = document.getElementById(
      `semester-${newSection}`
    );
    const semesterListDOM = document.getElementById("semester-list");

    if (currentSemesterDOM && semesterListDOM) {
      semesterListDOM.scrollLeft =
        currentSemesterDOM.offsetLeft - (isAscending ? 20 : 10);
    }
  };
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Section padding="60px">
  <h1>Projects</h1>
  <div class="col-wrapper">
    <aside style={windowWidth ? `--window-width: ${windowWidth}px` : ""}>
      <ul id="semester-list">
        {#each data.projectsInfo.semesters as semester, idx}
          <li id={`semester-${idx}`}>
            <a
              href={`/projects#${semesterToId(semester)}`}
              on:click={() => setSemester(idx)}
              class:active={currentSemester === idx}
            >
              {semester}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
    <article>
      {#each data.projectsInfo.semesters as semester, idx}
        {@const featured = data.projectsInfo.projectMap[semester].featured}
        <section class="semester-section">
          <h2 id={semesterToId(semester)}>{semester}</h2>
          {#if featured}
            <FeaturedBanner project={featured} />
          {/if}
          <span use:viewport on:enterViewport={() => setSemester(idx)} />
          <div class="project-grid">
            {#each data.projectsInfo.projectMap[semester].projects as project}
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

    .semester-section > h2 {
      scroll-margin-top: calc(60px + 0.25em + 85px);
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
    scroll-behavior: smooth;
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
