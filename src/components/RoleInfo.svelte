<script lang="ts">
  import type { Role } from "$utils/schema";
  import Accordion from "./Accordion.svelte";

  export let role: Role;
</script>

<Accordion theme="light">
  <span slot="title">
    {role.name}
  </span>
  <span slot="contents">{@html role.description}</span>
</Accordion>
