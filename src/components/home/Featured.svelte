<script lang="ts">
  import Section from "../Section.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import type { Project } from "../../utils/schema";

  export let projects: Project[];
</script>

<style>
  h1,
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  h4,
  a {
    font-size: 20px;
    opacity: 80%;
  }

  a {
    text-decoration: none;
  }

  .featured-projects-container {
    padding: 30px 0;
  }

  .featured-project {
    color: #fff;
    padding: 20px;
    margin-bottom: 20px;
  }
</style>

<Section id="featured-projects">
  <div class="featured-projects-container">
    <h1>Featured Work</h1>
    <a href="projects/{projects[0].slug}" rel="prefetch">
      <div
        class="featured-project"
        style="background-color: {projects[0].accentColor}">
        <h4>{projects[0].name}</h4>
        <h2>{projects[0].summary}</h2>
        <span>Learn More →</span>
      </div>
    </a>
    <div class="row-center">
      {#each projects.slice(1) as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </div>
</Section>
