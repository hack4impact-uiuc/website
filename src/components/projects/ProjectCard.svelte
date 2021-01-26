<script lang="ts">
  import Button from "../Button.svelte";
  import { setImageHeight } from "../../utils/schema";
  import type { Project } from "../../utils/schema";

  export let project: Project;
</script>

<div class="project-card">
  <div class="image-container">
    <img
      src={setImageHeight(project.nonprofitLogo.src, 100)}
      alt={project.nonprofitLogo.alt}
    />
  </div>

  <h4>{project.name}</h4>
  <p>{project.summary}</p>
  <a href="projects/{project.slug}" rel="prefetch">
    <Button type="secondary-custom" arrow textColor={project.accentColor}>
      Learn More
    </Button>
  </a>
</div>

<style>
  a {
    text-decoration: none;
  }

  p {
    opacity: 80%;
    height: 100px;
  }

  img {
    max-height: 50px;
    max-width: 80%;
    object-position: left;
    object-fit: contain;
  }

  .image-container {
    height: 60px;
    width: 100%;
  }

  .project-card {
    padding: 16px;
  }
</style>
