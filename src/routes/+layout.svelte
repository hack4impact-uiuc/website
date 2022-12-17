<script lang="ts">
  import * as ackeeTracker from "ackee-tracker";
  import { onMount } from "svelte";
  import { env } from "$env/dynamic/public";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  const { CLIENT_ACKEE_URL, CLIENT_ACKEE_DOMAIN_ID } = env;

  if (CLIENT_ACKEE_URL && CLIENT_ACKEE_DOMAIN_ID) {
    onMount(() =>
      ackeeTracker.create(CLIENT_ACKEE_URL).record(CLIENT_ACKEE_DOMAIN_ID)
    );
  }
</script>

<Nav />

<main>
  <slot />
</main>

<Footer semesters={data.semesters} />
