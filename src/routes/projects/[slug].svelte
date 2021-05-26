<script context="module" lang="ts">
  import DoubleBanner from "../../components/DoubleBanner.svelte";
  import Member from "../../components/projects/Member.svelte";
  import Section from "../../components/Section.svelte";
  import Testimonial from "../../components/Testimonial.svelte";
  import { pSBC } from "../../utils/color";
  import { setImageHeight } from "../../utils/schema";
  import type { Project } from "../../utils/schema";

  export async function preload({ params }) {
    const { slug } = params;
    const res = await this.fetch(`server/projects/${slug}.json`);

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
{#if project.testimonial !== undefined && project.testimonialSourceName !== undefined && project.testimonialSourceDescription !== undefined}
  <Section id="testimonial" longForm padding="40px" color="var(--gray-lighter)"
    ><div class="column-center">
      <Testimonial
        quote={project.testimonial}
        name={project.testimonialSourceName}
        desc={project.testimonialSourceDescription}
      />
    </div></Section
  >
{/if}
<Section id="team" longForm padding="40px" color={project.accentColor}>
  <div id="team-content">
    <h2>Meet The Team</h2>
    <div class="team-grid">
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
  p {
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

  .team-grid {
    --columns: 4;
    display: grid;
    grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
    column-gap: 2rem;
  }

  @media only screen and (max-width: 650px) {
    .team-grid {
      --columns: 2;
    }
  }

  @media only screen and (max-width: 300px) {
    .team-grid {
      --columns: 1;
    }
  }

  img {
    max-width: 80%;
    object-fit: contain;
    max-height: 600px;
  }
</style>
