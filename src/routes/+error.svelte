<script lang="ts">
  import { page } from "$app/stores";
  import Button from "$lib/components/Button.svelte";
  import Section from "$lib/components/Section.svelte";
</script>

<svelte:head>
  {#if $page.status === 404}
    <title>Page Not Found | Hack4Impact UIUC</title>
    <meta
      name="description"
      content="Uniting students to build well-engineered and impactful products for social change."
    />
  {:else}
    <title>{$page.status}</title>
  {/if}
</svelte:head>

{#if $page.status === 404}
  <Section id="page-not-found" padding="40px">
    <h1>Page not found.</h1>
    <Button type="primary" href="/">Return to home</Button>
  </Section>
{:else}
  <h1 class="title">{$page.status}</h1>

  <p>{$page.error?.message}</p>
{/if}

<style>
  .title,
  p {
    margin: 0 auto;
  }

  .title {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    .title {
      font-size: 4em;
    }
  }
</style>
