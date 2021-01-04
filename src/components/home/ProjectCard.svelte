<script lang="ts">
  import Button from "../Button.svelte";
  import { setImageHeight } from "../../utils/schema";
  import type { Project } from "../../utils/schema";

  export let project: Project;
</script>

<style>
  a {
    text-decoration: none;
    width: 30%;
  }
  h4,
  p {
    font-size: 20px;
  }

  p {
    opacity: 80%;
    height: 100px;
  }

  img {
    height: 50px;
    margin-bottom: 10px;
  }

  .project-card {
    padding: 16px;
  }
</style>

<a href="projects/{project.slug}" rel="prefetch">
  <div class="project-card">
    <img
      src={setImageHeight(project.nonprofitLogo.src, 100)}
      alt={project.nonprofitLogo.alt} />
    <h4>{project.name}</h4>
    <p>{project.summary}</p>
    <Button type="secondary-custom" arrow textColor={project.accentColor}>
      Learn More
    </Button>
  </div>
</a>
