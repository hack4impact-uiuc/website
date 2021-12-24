<script context="module" lang="ts">
  import Button from "$lib/components/Button.svelte";
  import DoubleBanner from "$lib/components/DoubleBanner.svelte";
  import FeaturedBanner from "$lib/components/projects/FeaturedBanner.svelte";
  import Head from "$lib/components/Head.svelte";
  import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
  import Row from "$lib/components/Row.svelte";
  import Section from "$lib/components/Section.svelte";
  import { Image, Info, Project, setImageHeight } from "$lib/utils/schema";

  export async function load({ fetch }) {
    const [info, projects] = await Promise.all([
      fetch("/server/info.json").then((res: Response) => res.json()),
      fetch("/server/featured.json").then((res: Response) => res.json()),
    ] as [Info, Project[]]);

    return {
      props: {
        about: info.homepageAbout,
        partnerships: info.homepagePartnerships,
        projects,
      },
    };
  }
</script>

<script lang="ts">
  export let about: Image;
  export let partnerships: Image;
  export let projects: Project[];
</script>

<svelte:head>
  <Head
    title="Hack4Impact UIUC"
    description="Uniting students to build well-engineered and impactful products for social change."
    url="https://uiuc.hack4impact.org/projects"
    image={partnerships.src}
  />
</svelte:head>

<DoubleBanner leftColor="var(--blue)" rightColor="var(--blue-darker)">
  <span slot="left">
    <h1>Software For Nonprofits</h1>
    <p id="banner-mission">
      Uniting students to build well-engineered and impactful products for
      social change.
    </p>
    <a class="button-link" href="/projects">
      <Button type="primary-white">See Our Work</Button>
    </a>
  </span>
  <span slot="right" id="graphic-container" class="column-center">
    <img
      src="graphic.svg"
      alt="Graphic of two people with programming-based visuals."
      id="graphic"
    />
  </span>
</DoubleBanner>

<Section id="featured-projects" padding="60px">
  <div id="featured-section">
    <h1>Featured Work</h1>
    {#if projects.length > 0}<FeaturedBanner project={projects[0]} />{/if}
    <div class="project-grid">
      {#each projects.slice(1) as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </div>
</Section>

<Section id="about" color="var(--gray-lighter)" padding="60px">
  <Row gap={84} reverseOnMobile
    ><div id="about-us-content">
      <h2>About Us</h2>
      <div class="row-center" />
      <p>
        We partner with nonprofits and other socially minded organizations to
        build impactful products. Each product is spearheaded by a dedicated
        development team on a one or two semester timeline.
      </p>
      <a class="button-link" href="/about" sveltekit:prefetch
        ><Button type="primary">Learn More</Button></a
      >
    </div>
    <figure>
      <img src={setImageHeight(about.src, 900)} alt={about.alt} />
    </figure>
  </Row>
</Section>

<Section id="partnerships" padding="60px">
  <Row gap={84} reverse
    ><div id="">
      <h2>Partnerships</h2>
      <div class="row-center" />
      <p>
        Interested in working with us? Nonprofits can reach out to propose a
        software product that increases their impact. Students are welcome to
        check for open positions involving engineering and design at the
        beginning of each semester.
      </p>
      <div class="row-center">
        <a class="button-link" href="/join/nonprofits" sveltekit:prefetch
          ><Button type="primary">For Nonprofits</Button></a
        >
        <a class="button-link" href="/join/students" sveltekit:prefetch
          ><Button type="secondary">For Students</Button></a
        >
      </div>
    </div>
    <figure>
      <img src={partnerships.src} alt={partnerships.alt} />
    </figure>
  </Row>
</Section>

<style>
  a {
    text-decoration: none;
  }

  #banner-mission {
    opacity: 80%;
    font-size: 1.2rem;
  }

  a {
    margin: 0 20px 20px 0;
  }

  #featured-section h1 {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }

  #graphic-container {
    height: 100%;
    align-items: flex-end;
  }

  #graphic-container img {
    height: 75%;
    width: 100%;

    object-fit: cover;
    object-position: left top;
  }

  :global(#banner-right-content) {
    padding-right: 0 !important;
    padding-left: 10% !important;
  }

  :global(#banner-right-content #graphic-container) {
    justify-content: flex-end;
  }

  #graphic {
    height: 90%;
  }

  #about-us-content {
    color: var(--blue-darker);
  }

  figure > img {
    width: 100%;
    border-radius: 4px;
  }
</style>
