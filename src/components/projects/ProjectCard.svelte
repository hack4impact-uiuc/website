<script lang="ts">
  import Button from "$components/Button.svelte";
  import { setImageHeight } from "$utils/schema";
  import type { Project } from "$utils/schema";

  export let project: Project;
</script>

<div class="project-card">
  <img
    src={setImageHeight(project.nonprofitLogo.src, 100)}
    alt={project.nonprofitLogo.alt}
    draggable="false"
  />

  <h4>{project.name}</h4>
  <p>{project.summary}</p>
  <Button
    href="/projects/{project.slug}"
    type="secondary-custom"
    arrow
    textColor={project.accentColor}
    size="small"
  >
    Learn More
  </Button>
</div>

<style>
  p {
    opacity: 80%;
    height: 5em;
    font-size: 0.8rem;
  }

  img {
    height: 40px;
    max-width: 150px;
    width: 80%;
    object-position: left center;
    object-fit: contain;
  }

  .project-card {
    padding: 0.8rem;
  }
</style>
