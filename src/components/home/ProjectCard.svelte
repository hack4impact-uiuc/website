<script lang="ts">
  import Button from "../Button.svelte";
  import type { Project } from "../../utils/schema";

  export let project: Project;
</script>

<style>
  h4,
  p {
    font-size: 20px;
  }

  p {
    opacity: 80%;
    height: 100px;
  }

  .project-card {
    padding: 16px;
    width: 30%;
  }
</style>

<div class="project-card">
  <h4>{project.name}</h4>
  <p>{project.summary}</p>
  <a href="projects/{project.slug}" rel="prefetch">
    <Button type="secondary-custom" textColor={project.accentColor}>
      Learn More →
    </Button>
  </a>
</div>
