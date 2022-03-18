<script context="module" lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export async function load({ fetch }) {
    const res = await fetch("/server/project-semesters.json");

    const semesters: string[] = await res.json();

    return { props: { semesters } };
  }
</script>

<script lang="ts">
  import * as ackeeTracker from "ackee-tracker";
  import { beforeUpdate } from "svelte";

  export let semesters: string[] = [];

  beforeUpdate(() =>
    ackeeTracker
      .create(import.meta.env.CLIENT_ACKEE_URL)
      .record(import.meta.env.CLIENT_ACKEE_DOMAIN_ID)
  );
</script>

<Nav />

<main>
  <slot />
</main>

<Footer {semesters} />
