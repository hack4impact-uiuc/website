<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ url }) => {
    return {
      status: 301,
      redirect: url.pathname.replace("apply", "join"),
    };
  };
</script>

<slot />
