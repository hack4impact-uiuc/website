<script context="module" lang="ts">
  import Button from "../components/Button.svelte";
  import DoubleBanner from "../components/DoubleBanner.svelte";
  import FeaturedBanner from "../components/projects/FeaturedBanner.svelte";
  import ProjectCard from "../components/projects/ProjectCard.svelte";
  import Section from "../components/Section.svelte";
  import type { Project } from "../utils/schema";

  export async function preload() {
    const res = await this.fetch("server/featured.json");

    const projects: Project[] = (await res.json()).slice(0, 4);

    return { projects };
  }
</script>

<script lang="ts">
  export let projects: Project[];
</script>

<svelte:head>
  <title>Hack4Impact UIUC</title>
  <meta
    name="description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
</svelte:head>

<DoubleBanner leftColor="var(--blue)" rightColor="var(--blue-darker)">
  <span slot="left"
    ><h1>Software For Nonprofits</h1>
    <p id="banner-mission">
      Uniting students to build well-engineered and impactful products for
      social change.
    </p>
    <a class="button-link" href="projects">
      <Button type="primary-white">See Our Work</Button>
    </a>
  </span>
  <span slot="right" id="graphic-container" class="column-center">
    <img
      src="graphic.svg"
      alt="Graphic of two people with programming-based visuals."
      id="graphic"
    />
  </span>
</DoubleBanner>
<Section id="featured-projects" padding="30px">
  <div id="featured-section">
    <h1>Featured Work</h1>
    {#if projects.length > 0}<FeaturedBanner project={projects[0]} />{/if}
    <div class="project-grid">
      {#each projects.slice(1) as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </div>
</Section>

<style>
  a {
    text-decoration: none;
  }

  #banner-mission {
    opacity: 80%;
    font-size: 24px;
  }

  a {
    margin: 0 20px 20px 0;
    /* display: inline-block; */
  }

  #featured-section h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 50px;
  }

  #graphic-container {
    width: 100%;
    height: 100%;
  }

  #graphic {
    height: 90%;
  }
</style>
