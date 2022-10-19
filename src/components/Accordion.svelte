<script lang="ts" context="module">
  import { slide } from "svelte/transition";
</script>

<script lang="ts">
  export let theme: "light" | "dark" | undefined = undefined;

  let open = false;

  function toggle() {
    open = !open;
  }
</script>

<div class="accordion" class:light={theme === "light"}>
  <button class="summary" on:click={toggle}>
    <h3>{open ? "−" : "+"} <slot name="title" /></h3>
  </button>
  <div>
    <slot name="actions" />
  </div>
</div>
{#if open}
  <div class="panel" transition:slide={{ duration: 150 }}>
    <slot name="contents" />
  </div>
{/if}

<style>
  .accordion {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid var(--blue);
  }

  .accordion > * {
    padding: 20px 0;
  }

  .summary {
    flex: 1;
    height: 100%;
    border: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
  }

  .panel {
    padding: 10px 0;
  }

  h3 {
    color: var(--blue);
    margin: 0;
    text-align: start;
  }

  .light h3 {
    color: var(--gray-lighter);
  }

  .light {
    border-color: var(--gray-lighter);
  }
</style>
