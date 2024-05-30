<script lang="ts">
  import type { Role } from "$lib/utils/schema";
  import Accordion from "./Accordion.svelte";
  import Button from "./Button.svelte";

  export let role: Role;
</script>

<Accordion theme="light">
  <span slot="title">
    {role.name}
  </span>
  <svelte:fragment slot="actions">
    {#if role.open}
      <Button href="#process" type="primary-white">Apply</Button>
    {/if}
  </svelte:fragment>
  <span slot="contents">{@html role.description}</span>
</Accordion>
