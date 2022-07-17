<script context="module" lang="ts">
  import Nav from "$components/Nav.svelte";
  import Footer from "$components/Footer.svelte";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const res = await fetch("/server/project-semesters.json");

    const semesters: string[] = await res.json();

    return { props: { semesters } };
  };
</script>

<script lang="ts">
  export let semesters: string[] = [];
</script>

<Nav />

<main>
  <slot />
</main>

<Footer {semesters} />
