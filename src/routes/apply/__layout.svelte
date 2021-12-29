<script lang="ts" context="module">
  export async function load({ page }) {
    return {
      status: 301,
      redirect: page.path.replace("apply", "join"),
    };
  }
</script>

<slot />
