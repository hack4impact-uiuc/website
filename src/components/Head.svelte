<script lang="ts">
  export let title: string;
  export let description: string;
  export let url: string;
  export let image: string | undefined;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <meta property="og:title" content={title} />\
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />

  <meta property="twitter:title" content={title} />\
  <meta property="twitter:description" content={description} />
  <meta property="twitter:url" content={url} />

  <meta
    name="twitter:card"
    content={image !== undefined ? "summary_large_image" : "summary"}
  />

  {#if image !== undefined}
    <meta property="og:image" content={image} />
    <meta name="twitter:image" content={image} />
  {/if}
</svelte:head>
