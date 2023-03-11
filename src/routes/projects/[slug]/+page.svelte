<script lang="ts">
  import DoubleBanner from "$lib/components/DoubleBanner.svelte";
  import ProjectMember from "$lib/components/projects/ProjectMember.svelte";
  import Section from "$lib/components/Section.svelte";
  import Testimonial from "$lib/components/Testimonial.svelte";
  import { pSBC } from "$lib/utils/color";
  import { setImageHeight } from "$lib/utils/schema";

  export let data;
</script>

<DoubleBanner
  leftColor={data.project.accentColor}
  rightColor={pSBC(-0.2, data.project.accentColor)}
>
  <span slot="left">
    {#if data.project.logoWhite}
      <img
        id="nonprofit-logo"
        src={setImageHeight(data.project.logoWhite.src, 100)}
        alt={data.project.logoWhite.alt}
        draggable="false"
      />
    {/if}
    <h1>{data.project.name}</h1>
    <h2 id="project-summary">{data.project.summary}</h2></span
  >
  <span slot="right">
    {#if data.project.headerImage !== undefined}
      <div id="header-container" class="column-center">
        <img
          src={setImageHeight(data.project.headerImage.src, 800)}
          alt={data.project.headerImage.alt}
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
  <p>{data.project.nonprofitDescription}</p>
</Section>

<Section
  id="project-description"
  longForm
  padding="40px"
  --accent-color={data.project.accentColor}
>
  {@html data.project.fullDescription}
</Section>

{#if data.project.testimonial !== undefined && data.project.testimonialSourceName !== undefined && data.project.testimonialSourceDescription !== undefined}
  <Section id="testimonial" longForm padding="40px" color="var(--gray-lighter)">
    <div class="column-center">
      <Testimonial
        quote={data.project.testimonial}
        name={data.project.testimonialSourceName}
        desc={data.project.testimonialSourceDescription}
        imageSrc={data.project.testimonialSourceImage?.src}
      />
    </div>
  </Section>
{/if}

<Section id="team" longForm padding="40px" color={data.project.accentColor}>
  <div id="team-content">
    <h2>Meet The Team</h2>
    <div class="team-grid">
      {#if data.project.productManager}
        {#each data.project.productManager as member}
          <ProjectMember {member} role="Product Manager" />
        {/each}{/if}
      {#if data.project.techLead}
        {#each data.project.techLead as member}
          <ProjectMember {member} role="Tech Lead" />
        {/each}{/if}
      {#if data.project.productDesigner}
        {#each data.project.productDesigner as member}
          <ProjectMember {member} role="Product Designer" />
        {/each}{/if}
      {#if data.project.softwareDevelopers}
        {#each data.project.softwareDevelopers as member}
          <ProjectMember {member} role="Software Developer" />
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

  :global(#project-description li) {
    text-decoration: underline var(--accent-color);
    font-size: 1rem;
  }
</style>
