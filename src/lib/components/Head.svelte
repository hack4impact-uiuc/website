<script lang="ts">
  export let title: string;
  export let description: string;
  export let url: string;
  export let image: string | undefined;
</script>

<title>{title}</title>
<meta name="description" content={description} />

<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={url} />

<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:url" content={url} />

<meta
  name="twitter:card"
  content={image !== undefined ? "summary_large_image" : "summary"}
/>

{#if image !== undefined}
  <meta property="og:image" content={image} />
  <meta name="twitter:image" content={image} />
{/if}
