<script lang="ts">
  import Button from "../Button.svelte";
  import { setImageHeight } from "../../utils/schema";
  import type { Project } from "../../utils/schema";

  export let project: Project;
</script>

<div class="project-card">
  <img
    src={setImageHeight(project.nonprofitLogo.src, 100)}
    alt={project.nonprofitLogo.alt}
  />

  <h4>{project.name}</h4>
  <p>{project.summary}</p>
  <a href="projects/{project.slug}" sapper:prefetch>
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
    font-size: 0.8rem;
  }

  img {
    height: 50px;
    width: 80%;
    object-position: left bottom;
    object-fit: contain;
  }

  .project-card {
    padding: 0.8rem;
  }
</style>
