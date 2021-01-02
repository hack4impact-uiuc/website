<script lang="ts">
  export let type:
    | "primary"
    | "primary-white"
    | "primary-custom"
    | "secondary"
    | "secondary-white"
    | "secondary-custom";

  // backgroundColor and textColor props only applied on custom button types
  export let backgroundColor: string = "#fff";
  export let textColor: string = "var(--dark-text)";
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

<button
  class="button-{type}"
  style={type.endsWith('custom') ? `background-color: ${backgroundColor}; color: ${textColor}; border-color: ${type.startsWith('primary') ? backgroundColor : textColor}` : undefined}>
  <slot />
</button>
