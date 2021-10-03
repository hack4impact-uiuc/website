<script context="module" lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export async function load({ page, fetch }) {
    const res = await fetch("/server/project-semesters.json");

    const semesters: string[] = await res.json();

    const { path } = page;

    return { props: { semesters, path } };
  }
</script>

<script lang="ts">
  import * as ackeeTracker from "ackee-tracker";
  import { beforeUpdate } from "svelte";

  export let semesters: string[] = [];

  export let path: string;

  beforeUpdate(() =>
    ackeeTracker
      .create("https://site-analytics.vercel.app/")
      .record("7f105537-100a-47d3-8317-4b58e426ba85")
  );
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta name="twitter:domain" value="https://uiuc.hack4impact.org" />
</svelte:head>

<Nav {path} />

<main>
  <slot />
</main>

<Footer {semesters} />
