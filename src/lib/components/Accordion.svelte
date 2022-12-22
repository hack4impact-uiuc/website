<script lang="ts">
  import { prefersReducedMotion } from "$lib/utils/accessibility";

  export let open = false;
  export let theme: "light" | "dark" | undefined = undefined;

  let panel: HTMLDivElement;

  $: if (panel && open) {
    animatePanel(true);
  }

  function animatePanel(opening: boolean) {
    const paddingBlock = Number(
      getComputedStyle(panel).paddingBlock.replace("px", "")
    );

    const heightKeyframes = [
      "0px",
      `${panel.clientHeight - 2 * paddingBlock}px`,
    ];
    const paddingKeyframes = ["0px", `${paddingBlock}px`];

    const animation = panel.animate(
      {
        height: heightKeyframes,
        paddingBlock: paddingKeyframes,
      },
      {
        duration: !$prefersReducedMotion ? 150 : 0,
        easing: opening ? "ease-out" : "ease-in",
        direction: opening ? "normal" : "reverse",
      }
    );

    if (!opening) {
      animation.oncancel =
        animation.onfinish =
        animation.onremove =
          () => (open = false);
    }
  }

  function togglePanel() {
    // Open up immediately to get the panel to animate
    // when closing wait until it's done animating to close.
    if (!open) {
      open = true;
    } else {
      animatePanel(false);
    }
  }
</script>

<details bind:open>
  <summary
    class="accordion"
    class:light={theme === "light"}
    on:click|preventDefault={togglePanel}
  >
    <div class="heading">
      <slot name="title" />
    </div>
    <div>
      <slot name="actions" />
    </div>
  </summary>

  <div class="panel" bind:this={panel}>
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

  .accordion > * {
    padding: 20px 0;
  }

  summary {
    flex: 1;
    height: 100%;
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
    display: flex;
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
