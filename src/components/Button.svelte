<script lang="ts">
  export let type:
    | "primary"
    | "primary-white"
    | "primary-custom"
    | "secondary"
    | "secondary-white"
    | "secondary-custom";

  // backgroundColor and textColor props only applied on custom button types
  export let backgroundColor = "#fff";
  export let textColor = "var(--text-dark)";

  // append hover-animated arrow
  export let arrow: boolean | undefined = false;
</script>

<button
  class="button-{type}{arrow ? ' arrow' : ''}"
  on:click
  style={type.endsWith("custom")
    ? `background-color: ${
        type.startsWith("primary") ? backgroundColor : "transparent"
      }; color: ${textColor}; border-color: ${
        type.startsWith("primary") ? backgroundColor : textColor
      }`
    : undefined}
>
  <slot />
</button>

<style>
  button {
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    opacity: 100%;
    transition: 0.2s;
    border: solid 2px;
    font-size: 0.7rem;
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

  .arrow {
    padding-right: 2.2em;
  }

  .arrow::after {
    content: "\2192";
    padding: 0 0.3em 0 0.5em;
    transition: padding var(--animation);
  }

  .arrow:hover::after {
    padding: 0 0 0 0.8em;
  }
</style>
