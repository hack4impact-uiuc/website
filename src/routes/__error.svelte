<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = ({ status, error }) => {
    return {
      props: {
        status,
        error,
      },
    };
  };
</script>

<script lang="ts">
  import Button from "$components/Button.svelte";
  import Section from "$components/Section.svelte";

  export let status: number;
  export let error: Error;
</script>

<svelte:head>
  {#if status === 404}
    <title>Page Not Found | Hack4Impact UIUC</title>
    <meta
      name="description"
      content="Uniting students to build well-engineered and impactful products for social change."
    />
  {:else}
    <title>{status}</title>
  {/if}
</svelte:head>

{#if status === 404}
  <Section id="page-not-found" padding="40px">
    <h1>Page not found.</h1>
    <Button type="primary" href="/">Return to home</Button>
  </Section>
{:else}
  <h1 class="title">{status}</h1>

  <p>{error?.message}</p>

  <pre>{error?.stack}</pre>
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
