<script lang="ts" context="module">
  import RoleCard from "../../components/RoleCard.svelte";
  import Section from "../../components/Section.svelte";
  import Value from "../../components/Value.svelte";
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
</style>
