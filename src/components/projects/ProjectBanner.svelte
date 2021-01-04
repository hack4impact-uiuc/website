<script lang="ts">
  import DoubleBanner from "../../components/DoubleBanner.svelte";
  import { pSBC } from "../../utils/color";
  import { setImageHeight } from "../../utils/schema";
  import type { Project } from "../../utils/schema";
  export let project: Project;
</script>

<style>
  h2 {
    opacity: 80%;
  }

  img {
    height: 60px;
    margin-bottom: 20px;
    background-color: #fff;
  }
</style>

<DoubleBanner
  leftColor={project.accentColor}
  rightColor={pSBC(-0.2, project.accentColor)}>
  <img
    src={setImageHeight(project.nonprofitLogo.src, 100)}
    alt={project.nonprofitLogo.alt} />
  <h1>{project.name}</h1>
  <h2>{project.summary}</h2>
</DoubleBanner>
