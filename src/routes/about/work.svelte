<script lang="ts" context="module">
  import Accordion from "../../components/Accordion.svelte";
  import Button from "../../components/Button.svelte";
  import RoleCard from "../../components/RoleCard.svelte";
  import Section from "../../components/Section.svelte";
  import Value from "../../components/Value.svelte";
  import type { FAQ } from "../../utils/schema";

  export async function preload() {
    const res = await this.fetch(`server/work-faq.json`);
    const faqs: FAQ[] = await res.json();

    return { faqs };
  }
</script>

<script lang="ts">
  export let faqs: FAQ[];
</script>

<svelte:head>
  <title>How We Work | Hack4Impact UIUC</title>
</svelte:head>

<Section id="intro" padding="60px">
  <h1>How We Work</h1>
  <p>
    Hack4Impact believes in technology’s huge potential to empower activists and
    humanitarians to create lasting and impactful social change. We work to
    foster wider adoption.
  </p>
</Section>
<Section color="var(--gray-lighter)" id="timeline" padding="40px">
  <h2>Project Timeline</h2>
  <div id="timeline-steps">
    <Value>
      <span slot="name">Product Research (3-4 Months)</span>
      <span slot="description"
        >Hack4Impact exists for both nonprofits and students. We connect student
        software developers with nonprofits and other socially responsible
        businesses to develop powerful new tools for social change. This enables
        nonprofits to further their mission and better engage their clients.</span
      >
    </Value>
    <Value>
      <span slot="name">Development</span>
      <span slot="description"
        >Hack4Impact exists for both nonprofits and students. We connect student
        software developers with nonprofits and other socially responsible
        businesses to develop powerful new tools for social change. This enables
        nonprofits to further their mission and better engage their clients.</span
      >
    </Value>
    <Value>
      <span slot="name">MVP & Feedback</span>
      <span slot="description"
        >Hack4Impact exists for both nonprofits and students. We connect student
        software developers with nonprofits and other socially responsible
        businesses to develop powerful new tools for social change. This enables
        nonprofits to further their mission and better engage their clients.</span
      >
    </Value>
    <Value>
      <span slot="name">Development</span>
      <span slot="description"
        >Hack4Impact exists for both nonprofits and students. We connect student
        software developers with nonprofits and other socially responsible
        businesses to develop powerful new tools for social change. This enables
        nonprofits to further their mission and better engage their clients.</span
      >
    </Value>
    <Value>
      <span slot="name">Hand-Off</span>
      <span slot="description"
        >Hack4Impact exists for both nonprofits and students. We connect student
        software developers with nonprofits and other socially responsible
        businesses to develop powerful new tools for social change. This enables
        nonprofits to further their mission and better engage their clients.</span
      >
    </Value>
  </div>
</Section>
<Section id="teams" padding="40px">
  <h2>Our Project Teams</h2>
  <div id="roles">
    <RoleCard>
      <span slot="role">Software Developers</span>
      <span slot="description"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore aliqua. sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua adipiscing elit.</span
      >
      <span slot="number">4-5</span>
    </RoleCard>
    <RoleCard>
      <span slot="role">Product Designers</span>
      <span slot="description"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore aliqua. sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua adipiscing elit.</span
      >
      <span slot="number">1</span>
    </RoleCard>
    <RoleCard>
      <span slot="role">Tech Leads</span>
      <span slot="description"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore aliqua. sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua adipiscing elit.</span
      >
      <span slot="number">1</span>
    </RoleCard>
    <RoleCard>
      <span slot="role">Product Manager</span>
      <span slot="description"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore aliqua. sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua adipiscing elit.</span
      >
      <span slot="number">1</span>
    </RoleCard>
  </div>
</Section>
<Section padding="40px" id="academy">
  <h2>Academy</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <div id="divider" />
</Section>
<Section padding="40px" id="faq" color="var(--gray-lighter)">
  <h2>Frequently Asked Questions</h2>
  {#each faqs as faq}
    <Accordion>
      <span slot="title">{faq.question}</span>
      <span slot="contents">{faq.answer}</span>
    </Accordion>
  {/each}
</Section>
<Section padding="40px" id="join" color="var(--blue)" longForm>
  <div id="join-container">
    <div>
      <h2>Join Us</h2>
      <p>Lorem Ipsum.</p>
    </div>
    <div class="row-center">
      <a href="join/students" rel="prefetch">
        <Button type="primary-white">Apply</Button>
      </a>
      <a href="about/team" rel="prefetch">
        <Button type="secondary-white">Meet the Team</Button>
      </a>
    </div>
  </div>
</Section>

<style>
  #timeline-steps {
    padding: 20px 0;
  }

  #roles {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 40px;
    row-gap: 40px;
  }

  #divider {
    width: 100%;
    height: 60px;
    background-color: var(--gray-light);
  }

  #join-container {
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #join-container p {
    opacity: 80%;
    margin: 0;
  }

  #join-container a {
    margin: 0 10px;
  }
</style>
