<script lang="ts">
  import * as ackeeTracker from "ackee-tracker";
  import { onMount } from "svelte";
  import { env } from "$env/dynamic/public";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import type { PageData } from "./$types";
  import Head from "$lib/components/Head.svelte";
  import { page } from "$app/stores";
  import SkipLink from "$lib/components/SkipLink.svelte";

  export let data: PageData;

  const baseTitle = "Hack4Impact UIUC";
  $: title = $page.data.title
    ? `${$page.data.title} | ${baseTitle}`
    : baseTitle;

  const { CLIENT_ACKEE_URL, CLIENT_ACKEE_DOMAIN_ID } = env;
  if (CLIENT_ACKEE_URL && CLIENT_ACKEE_DOMAIN_ID) {
    onMount(() =>
      ackeeTracker.create(CLIENT_ACKEE_URL).record(CLIENT_ACKEE_DOMAIN_ID)
    );
  }
</script>

<svelte:head>
  <Head
    {title}
    description="Uniting students to build well-engineered and impactful products for social change."
    url="https://uiuc.hack4impact.org"
    image={data.info.homepagePartnerships.src}
  />
</svelte:head>

<SkipLink />

<Nav />

<main id="content">
  <slot />
</main>

<Footer semesters={data.semesters} />
