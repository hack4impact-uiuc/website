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
      <a href="#process">
        <Button type="primary-white">Apply</Button>
      </a>
    {/if}
  </svelte:fragment>
  <span slot="contents">{@html role.description}</span>
</Accordion>
