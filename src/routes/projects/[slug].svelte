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
  <meta name="description" content="{project.summary}" />
  <meta
    property="og:url"
    content="https://h4iuiuc.netlify.app/projects/{project.slug}"
  />
  <meta property="og:title" content="{project.name}" />
  <meta property="og:description" content="{project.summary}" />
  {#if project.headerImage !== undefined}
    <meta property="og:image" content="{project.headerImage.src}" />
    <meta name="twitter:image" content="{project.headerImage.src}" />
  {/if}

  <meta
    name="twitter:card"
    content="{project.headerImage !== undefined
      ? 'summary_large_image'
      : 'summary'}"
  />
  <meta
    name="twitter:url"
    value="https://h4iuiuc.netlify.app/projects/{project.slug}"
  />
  <meta name="twitter:title" value="{project.name}" />
  <meta name="twitter:description" value="{project.summary}" />
</svelte:head>

<DoubleBanner
  leftColor="{project.accentColor}"
  rightColor="{pSBC(-0.2, project.accentColor)}"
>
  <span slot="left">
    <img
      id="nonprofit-logo"
      src="{setImageHeight(project.nonprofitLogo.src, 100)}"
      alt="{project.nonprofitLogo.alt}"
    />
    <h1>{project.name}</h1>
    <h2 id="project-summary">{project.summary}</h2></span
  >
  <span slot="right">
    {#if project.headerImage !== undefined}
      <div id="header-container" class="column-center">
        <img
          src="{setImageHeight(project.headerImage.src, 600)}"
          alt="{project.headerImage.alt}"
        />
      </div>
    {/if}
  </span>
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
  <Section id="testimonial" longForm padding="40px" color="var(--gray-lighter)">
    <div class="column-center">
      <Testimonial
        quote="{project.testimonial}"
        name="{project.testimonialSourceName}"
        desc="{project.testimonialSourceDescription}"
      />
    </div>
  </Section>
{/if}
<Section id="team" longForm padding="40px" color="{project.accentColor}">
  <div id="team-content">
    <h2>Meet The Team</h2>
    <div class="team-grid">
      {#if project.productManager}
        {#each project.productManager as member}
          <Member member="{member}" role="Product Manager" />
        {/each}{/if}
      {#if project.techLead}
        {#each project.techLead as member}
          <Member member="{member}" role="Tech Lead" />
        {/each}{/if}
      {#if project.productDesigner}
        {#each project.productDesigner as member}
          <Member member="{member}" role="Product Designer" />
        {/each}{/if}
      {#if project.softwareDevelopers}
        {#each project.softwareDevelopers as member}
          <Member member="{member}" role="Software Developer" />
        {/each}
      {/if}
    </div>
  </div>
</Section>

<style>
  #header-container {
    height: 100%;
  }

  #header-container img {
    width: 100%;
  }

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

  :global(#project-description img) {
    max-width: 80%;
    object-fit: contain;
    max-height: 600px;
  }

  :global(#project-description h1) {
    font-size: 1.6rem;
  }

  :global(#project-description h2) {
    font-size: 1.2rem;
  }
</style>
