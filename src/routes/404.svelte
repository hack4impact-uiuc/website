<script context="module">
  import Button from "$lib/components/Button.svelte";
  import Section from "$lib/components/Section.svelte";
</script>

<svelte:head>
  <title>Page Not Found | Hack4Impact UIUC</title>
  <meta
    name="description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
</svelte:head>

<Section id="page-not-found" padding="40px">
  <h1>Page not found.</h1>
  <a href="/" sveltekit:prefetch>
    <Button type="primary">Return to home</Button>
  </a>
</Section>
