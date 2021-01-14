<script context="module" lang="ts">
  import DoubleBanner from "../../components/DoubleBanner.svelte";
  import Member from "../../components/projects/Member.svelte";
  import Section from "../../components/Section.svelte";
  import { pSBC } from "../../utils/color";
  import { setImageHeight } from "../../utils/schema";
  import type { Project } from "../../utils/schema";

  export async function preload({ params }) {
    const { slug } = params;
    const res = await this.fetch(`projects/${slug}.json`);

    const project: Project = await res.json();
    return { project };
  }
</script>

<script lang="ts">
  export let project: Project;
</script>

<svelte:head>
  <title>{project.name} | Hack4Impact UIUC</title>
</svelte:head>

<DoubleBanner
  leftColor={project.accentColor}
  rightColor={pSBC(-0.2, project.accentColor)}
>
  <span slot="left"
    ><img
      id="nonprofit-logo"
      src={setImageHeight(project.nonprofitLogo.src, 100)}
      alt={project.nonprofitLogo.alt}
    />
    <h1>{project.name}</h1>
    <h2 id="project-summary">{project.summary}</h2></span
  >
</DoubleBanner>
<Section
  id="nonprofit-description"
  longForm
  color="var(--gray-lighter)"
  padding="40px"
>
  <h2>Our Partner</h2>
  <p>{project.nonprofitDescription}</p>
</Section>
<Section id="project-description" longForm padding="40px">
  {@html project.fullDescription}
</Section>
<Section id="team" longForm padding="40px" color={project.accentColor}>
  <div id="team-content">
    <h2>Meet The Team</h2>
    <div class="flex-wrap">
      {#if project.productManager}
        {#each project.productManager as member}
          <Member {member} role="Product Manager" />
        {/each}{/if}
      {#if project.techLead}
        {#each project.techLead as member}
          <Member {member} role="Tech Lead" />
        {/each}{/if}
      {#if project.productDesigner}
        {#each project.productDesigner as member}
          <Member {member} role="Product Designer" />
        {/each}{/if}
      {#if project.softwareDevelopers}
        {#each project.softwareDevelopers as member}
          <Member {member} role="Software Developer" />
        {/each}
      {/if}
    </div>
  </div>
</Section>

<style>
  h1 {
    font-size: 56px;
  }

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 20px;
    opacity: 80%;
  }

  #project-summary {
    opacity: 80%;
  }

  #nonprofit-logo {
    height: 60px;
    margin-bottom: 20px;
    background-color: #fff;
  }

  #team-content {
    color: #fff;
  }
</style>
