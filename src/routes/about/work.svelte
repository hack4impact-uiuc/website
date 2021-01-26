<script lang="ts" context="module">
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

<style>
  #timeline-steps {
    padding: 20px 0;
  }
</style>
