<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import DoubleBanner from "$lib/components/DoubleBanner.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import FeaturedBanner from "$lib/components/projects/FeaturedBanner.svelte";
  import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
  import Row from "$lib/components/Row.svelte";
  import Section from "$lib/components/Section.svelte";
  import { setImageHeight } from "$lib/utils/schema";

  export let data;
</script>

<DoubleBanner
  leftColor="var(--blue)"
  rightColor="var(--blue-darker)"
  class="landing"
>
  <span slot="left">
    {#if data.info.homepageBannerText && data.info.homepageBannerUrl}
      <a class="banner" href={data.info.homepageBannerUrl}>
        {data.info.homepageBannerText}
        <Icon icon="chevron-right" width="1.5em" height="1.5em" />
      </a>
    {/if}
    <h1>Software For Nonprofits</h1>
    <p id="banner-mission">
      Uniting students to build well-engineered and impactful products for
      social change.
    </p>
    <Button type="primary-white" href="/projects">See Our Work</Button>
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
    {#if data.projects.length > 0}<FeaturedBanner
        project={data.projects[0]}
      />{/if}
    <div class="project-grid">
      {#each data.projects.slice(1) as project}
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
      <Button type="primary" href="/about">Learn More</Button>
    </div>
    <figure>
      <img
        src={setImageHeight(data.info.homepageAbout.src, 900)}
        alt={data.info.homepageAbout.alt}
      />
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
      <div class="row-center gap">
        <Button type="primary" href="/join/nonprofits">For Nonprofits</Button>
        <Button type="secondary" href="/join/students">For Students</Button>
      </div>
    </div>
    <figure>
      <img
        src={data.info.homepagePartnerships.src}
        alt={data.info.homepagePartnerships.alt}
      />
    </figure>
  </Row>
</Section>

<Section id="sponsorships" color="var(--blue)" padding="60px">
  <Row gap={84} reverse
    ><figure>
      <img
        src={data.info.homepageSponsorships.src}
        alt={data.info.homepageSponsorships.alt}
      />
    </figure>
    <div id="sponsorship-content">
      <h2>
        We
        <Icon icon="heart" width="1em" height="1em" />
        Our Sponsors
      </h2>
      <div class="row-center" />
      <p>
        Our drive to write impactful software for social good is made possible
        by equally socially minded organizations. A sponsorship with Hack4Impact
        is a lasting relationship that brings us to your commnunity and, in
        turn, supports our work.
      </p>
      <div class="row-center gap">
        <Button type="primary-white" href="/join/sponsors">For Sponsors</Button>
      </div>
    </div>
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

  .banner {
    border: 1px solid white;
    border-radius: 20px;
    padding: 5px 10px;
    line-height: 5;
  }

  .banner > :global(svg) {
    vertical-align: calc(-1 * calc(1.5em / 4));
  }

  .banner:hover > :global(svg) {
    animation: squish 400ms ease 1 both;
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

  :global(.landing #banner-right-content) {
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

  #sponsorship-content {
    color: white;
    vertical-align: top;
  }

  figure > img {
    width: 100%;
    border-radius: 4px;
  }

  @keyframes -global-squish {
    50% {
      transform: scaleY(0.75) translateX(3px);
    }
  }
</style>
