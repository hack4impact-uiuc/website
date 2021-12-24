<script context="module" lang="ts">
  import Head from "$lib/components/Head.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export async function load({ page, fetch, stuff }) {
    const res = await fetch("/server/project-semesters.json");

    const semesters: string[] = await res.json();

    const { path } = page;
    const { metadata } = stuff;

    return { props: { semesters, path, metadata } };
  }
</script>

<script lang="ts">
  import * as ackeeTracker from "ackee-tracker";
  import { beforeUpdate } from "svelte";

  interface Metadata {
    title: string;
    description: string;
    url: string;
    image: string | undefined;
  }

  export let semesters: string[] = [];
  export let path: string;
  export let metadata: Metadata;

  beforeUpdate(() =>
    ackeeTracker
      .create("https://site-analytics.vercel.app/")
      .record("7f105537-100a-47d3-8317-4b58e426ba85")
  );
</script>

<svelte:head>
  <Head {...metadata} />
</svelte:head>

<Nav {path} />

<main>
  <slot />
</main>

<Footer {semesters} />
