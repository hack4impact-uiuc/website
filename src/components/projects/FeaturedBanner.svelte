<script lang="ts">
  import type { Project } from "../../utils/schema";

  export let project: Project;
</script>

<a href="projects/{project.slug}" rel="prefetch">
  <div class="featured-project" style="background-color: {project.accentColor}">
    <h4>{project.name}</h4>
    <h2>{project.summary}</h2>
    <span>Learn More</span>
  </div>
</a>

<style>
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  h4,
  a {
    opacity: 80%;
  }

  a {
    text-decoration: none;
    font-size: 20px;
  }

  .featured-project {
    color: #fff;
    padding: 40px 20px;
    margin: 20px 0;
  }

  .featured-project > span::after {
    content: "\2192";
    padding-left: 0.5em;
    transition: padding var(--animation);
  }

  .featured-project:hover > span::after {
    padding-left: 0.8em;
  }
</style>
