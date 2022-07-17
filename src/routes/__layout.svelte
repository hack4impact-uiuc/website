<script context="module" lang="ts">
  import Nav from "$components/Nav.svelte";
  import Footer from "$components/Footer.svelte";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ url, fetch }) => {
    const res = await fetch("/server/project-semesters.json");

    const semesters: string[] = await res.json();

    return { props: { semesters, path: url.pathname } };
  };
</script>

<script lang="ts">
  import * as ackeeTracker from "ackee-tracker";
  import { beforeUpdate } from "svelte";
  import "../app.css";

  export let semesters: string[] = [];
  export let path: string;

  if (
    import.meta.env.CLIENT_ACKEE_URL &&
    import.meta.env.CLIENT_ACKEE_DOMAIN_ID
  ) {
    beforeUpdate(() =>
      ackeeTracker
        .create(import.meta.env.CLIENT_ACKEE_URL)
        .record(import.meta.env.CLIENT_ACKEE_DOMAIN_ID)
    );
  }
</script>

<Nav {path} />

<main>
  <slot />
</main>

<Footer {semesters} />
