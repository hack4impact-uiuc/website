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

<button class="accordion" on:click="{toggle}" class:light="{theme === 'light'}">
  <h3>{open ? "−" : "+"} <slot name="title" /></h3>
</button>
{#if open}
  <div class="panel" transition:slide="{{ duration: 150 }}">
    <slot name="contents" />
  </div>
{/if}

<style>
  .accordion {
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--blue);
    text-align: left;
    padding: 20px 0;
  }

  .panel {
    padding: 10px 0;
  }

  h3 {
    color: var(--blue);
    margin: 0;
  }

  button.light > h3 {
    color: var(--gray-lighter);
  }

  .accordion.light {
    border-color: var(--gray-lighter);
  }
</style>
