<script context="module" lang="ts">
  import DoubleBanner from "$lib/components/DoubleBanner.svelte";
  import Member from "$lib/components/projects/Member.svelte";
  import Section from "$lib/components/Section.svelte";
  import Testimonial from "$lib/components/Testimonial.svelte";
  import { pSBC } from "$lib/utils/color";
  import { setImageHeight } from "$lib/utils/schema";
  import type { Project } from "$lib/utils/schema";

  export async function load({ page, fetch }) {
    const { params } = page;
    const { slug } = params;
    const res = await fetch(`/server/projects/${slug}.json`);

    const project: Project = await res.json();

    // default to colored logo if white logo unavailable
    if (!project.logoWhite) {
      project.logoWhite = project.nonprofitLogo;
    }

    return {
      props: { project },
      stuff: {
        metadata: {
          title: "{project.name} | Hack4Impact UIUC",
          description: project.summary,
          url: `https://uiuc.hack4impact.org/projects/${project.slug}`,
          image: project.headerImage?.src,
        },
      },
    };
  }
</script>

<script lang="ts">
  export let project: Project;
</script>

<DoubleBanner
  leftColor={project.accentColor}
  rightColor={pSBC(-0.2, project.accentColor)}
>
  <span slot="left">
    <img
      id="nonprofit-logo"
      src={setImageHeight(project.logoWhite.src, 100)}
      alt={project.logoWhite.alt}
      draggable="false"
    />
    <h1>{project.name}</h1>
    <h2 id="project-summary">{project.summary}</h2></span
  >
  <span slot="right">
    {#if project.headerImage !== undefined}
      <div id="header-container" class="column-center">
        <img
          src={setImageHeight(project.headerImage.src, 600)}
          alt={project.headerImage.alt}
          draggable="false"
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
        quote={project.testimonial}
        name={project.testimonialSourceName}
        desc={project.testimonialSourceDescription}
        imageSrc={project.testimonialSourceImage?.src}
      />
    </div>
  </Section>
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
  #header-container {
    height: 100%;
  }

  #header-container img {
    height: 90%;
    width: 100%;

    object-fit: cover;
    object-position: left top;
  }

  :global(#banner-right-content) {
    padding-right: 0 !important;
    padding-left: calc(20% - 31px) !important;
  }

  :global(#banner-right-content #header-container) {
    justify-content: flex-end;
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
    width: 100%;
    object-fit: contain;
    object-position: left;
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
    border-radius: 4px;
  }

  :global(#project-description h1) {
    font-size: 1.6rem;
  }

  :global(#project-description h2) {
    font-size: 1.2rem;
  }
</style>
