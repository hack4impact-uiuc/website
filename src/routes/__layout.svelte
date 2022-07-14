<script context="module" lang="ts">
  import Nav from "$components/Nav.svelte";
  import Footer from "$components/Footer.svelte";
  import type { Load } from "@sveltejs/kit";
  import "../app.css";

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
      .create(import.meta.env.CLIENT_ACKEE_URL)
      .record(import.meta.env.CLIENT_ACKEE_DOMAIN_ID)
  );
</script>

<Nav {path} />

<main>
  <slot />
</main>

<Footer {semesters} />
