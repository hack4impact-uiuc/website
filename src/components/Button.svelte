<script lang="ts">
  export let type:
    | "primary"
    | "primary-white"
    | "secondary"
    | "secondary-white";
</script>

<style>
  button {
    border-radius: 4px;
    cursor: pointer;
    opacity: 100%;
    transition: 0.2s;
    border: solid 2px;
    font-size: 14px;
    font-family: Open Sans;
    padding: 1em 2.5em;
  }

  button:hover {
    opacity: 80%;
    transition: 0.2s;
  }

  .button-primary {
    border-color: var(--blue);
    background-color: var(--blue);
    color: #fff;
  }

  .button-primary-white {
    border-color: #fff;
    background-color: #fff;
    color: var(--blue);
  }

  .button-secondary {
    border-color: var(--blue);
    background-color: transparent;
    color: var(--blue);
  }

  .button-secondary-white {
    border-color: #fff;
    background-color: transparent;
    color: #fff;
  }
</style>

<button class={`button-${type}`}>
  <slot />
</button>
