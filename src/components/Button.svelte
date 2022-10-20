<script lang="ts">
  import Icon from "./Icon.svelte";

  // href for link button
  export let href: undefined | string = undefined;

  export let type:
    | "primary"
    | "primary-white"
    | "primary-custom"
    | "secondary"
    | "secondary-white"
    | "secondary-custom";

  export let size: "small" | "medium" | "large" = "medium";

  // backgroundColor and textColor props only applied on custom button types
  export let backgroundColor = "#fff";
  export let textColor = "var(--text-dark)";

  // append hover-animated arrow
  export let arrow = false;

  $: customStyles = type.endsWith("custom")
    ? `background-color: ${
        type.startsWith("primary") ? backgroundColor : "transparent"
      }; color: ${textColor}; border-color: ${
        type.startsWith("primary") ? backgroundColor : textColor
      }`
    : undefined;
  $: classes = `button ${type} ${size} ${arrow ? "arrow" : ""}`;

  $: tag = href ? "a" : "button";
  $: props = {
    href,
    class: classes,
    style: customStyles,
  };
  $: isExternal =
    href?.startsWith("http") ||
    href?.startsWith("mailto") ||
    href?.startsWith("tel");
</script>

<svelte:element
  this={tag}
  {...props}
  on:click
  sveltekit:prefetch={!isExternal ? true : undefined}
>
  <slot />
  {#if arrow}
    <Icon icon="chevron-right" width="1.125em" height="1.125em" />
  {/if}
</svelte:element>

<style>
  .button {
    --border-color: var(--blue);
    --background-color: var(--blue);
    --text-color: #fff;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.2s;

    font-size: 0.875rem;
    font-weight: 500;
    font-family: var(--fonts-body);
    padding: 0 1.5em;
    height: 3em;
    border-radius: 0.35em;

    border: solid 2px var(--border-color);
    background-color: var(--background-color);
    color: var(--text-color);

    text-decoration: none;
  }

  .button.small {
    font-size: 0.75rem;
    border-width: 1.5px;
  }

  .button.large {
    font-size: 1rem;
  }

  .button:hover {
    opacity: 0.85;
    transition: 0.2s;
  }

  @media (prefers-reduced-motion: no-preference) {
    .button:active {
      transform: scale(0.95);
    }
  }

  .primary {
    --border-color: var(--blue);
    --background-color: var(--blue);
    --text-color: #fff;
  }

  .primary-white {
    --border-color: #fff;
    --background-color: #fff;
    --text-color: var(--blue);
  }

  .secondary {
    --border-color: var(--blue);
    --background-color: transparent;
    --text-color: var(--blue);
  }

  .secondary-white {
    --border-color: #fff;
    --background-color: transparent;
    --text-color: #fff;
  }

  .arrow {
    padding-right: 1em;
  }

  .arrow > :global(svg) {
    padding: 0 0.2em 0 0.5em;
    transition: padding var(--animation);
  }

  .arrow:hover > :global(svg) {
    padding: 0 0 0 0.7em;
  }
</style>
