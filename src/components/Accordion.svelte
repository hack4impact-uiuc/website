<script lang="ts" context="module">
  import { slide } from "svelte/transition";
</script>

<script lang="ts">
  let open: boolean = false;

  function toggle() {
    open = !open;
  }
</script>

<button class="accordion" on:click={toggle}
  ><h3>{open ? "−" : "+"} <slot name="title" /></h3></button
>
{#if open}<div class="panel" transition:slide>
    <slot name="contents" />
  </div>{/if}

<style>
  .accordion {
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--blue-darker);
    text-align: left;
    padding: 20px 0;
  }

  .panel {
    padding: 10px 0;
  }

  h3 {
    color: var(--blue-darker);
    margin: 0;
  }
</style>
