<script lang="ts">
  import type { IconType } from "./Icon.svelte";
  import Icon from "./Icon.svelte";

  export let icon: IconType | undefined = undefined;
  export let index: number | undefined = undefined;
</script>

<div class="step row-center">
  <span
    ><div class="icon-container">
      {#if icon !== undefined}
        <Icon {icon} color="var(--blue-lighter)" height="50px" />
      {:else if index !== undefined}
        <span class="step-index">{index}</span>
      {/if}
    </div>
  </span>
  <span>
    <h3><slot name="name" /></h3>
    <h4><slot name="date" /></h4>
    <p><slot name="description" /></p>
  </span>
</div>

<style>
  h3 {
    color: var(--blue-darker);
    font-size: 1.2rem;
  }

  p {
    opacity: 80%;
  }

  .icon-container {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: var(--blue-darker);
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .step {
    margin: 1rem 0;
    justify-content: left;
  }

  .step > span:first-child {
    align-self: flex-start;
  }

  @media only screen and (max-width: 600px) {
    .step {
      flex-direction: column;
      margin-top: 0;
    }

    h3 {
      margin-top: 1rem;
    }
  }

  .step-index {
    font-size: 50px;
    color: var(--blue-lighter);
    text-align: center;
  }
</style>
