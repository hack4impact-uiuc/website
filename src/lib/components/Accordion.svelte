<script lang="ts">
  import { prefersReducedMotion } from "$lib/utils/accessibility";
  import animatedDetails from "$lib/utils/animatedDetails";

  export let open = false;
  export let theme: "light" | "dark" | undefined = undefined;
</script>

<details
  bind:open
  use:animatedDetails={{ duration: !$prefersReducedMotion ? 150 : 0 }}
>
  <summary class="accordion" class:light={theme === "light"}>
    <div class="heading">
      <slot name="title" />
    </div>
    <div>
      <slot name="actions" />
    </div>
  </summary>

  <div class="panel">
    <slot name="contents" />
  </div>
</details>

<style>
  details {
    overflow: hidden;
  }

  .accordion {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 5px;
    width: 100%;
    border-bottom: 1px solid var(--blue);
  }

  .accordion:focus-visible {
    outline: 3px solid var(--blue);
    outline-offset: -2px;
  }

  .accordion.light:focus-visible {
    outline-color: var(--gray-lighter);
  }

  .accordion > * {
    padding: 20px 0;
  }

  summary {
    flex: 1;
    border: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;

    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.2;
    font-family: var(--fonts-heading);

    color: var(--blue);
    margin: 0;
    text-align: start;
  }

  .panel {
    padding: 10px 0;
  }

  .heading::before {
    content: "+ ";
  }

  details[open] .heading::before {
    content: "− ";
  }

  .accordion.light .heading {
    color: var(--gray-lighter);
  }

  .light {
    border-color: var(--gray-lighter);
  }
</style>
