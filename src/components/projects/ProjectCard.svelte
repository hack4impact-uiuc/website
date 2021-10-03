<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { setImageHeight } from "$lib/utils/schema";
  import type { Project } from "$lib/utils/schema";

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
  <a href="/projects/{project.slug}" sveltekit:prefetch>
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
