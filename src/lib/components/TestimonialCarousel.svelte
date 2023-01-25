<script lang="ts">
  import { prefersReducedMotion } from "$lib/utils/accessibility";
  import {
    setImageHeight,
    type Testimonial as TestimonialType,
  } from "$lib/utils/schema";
  import { createClock } from "$lib/utils/stores";
  import viewport from "$lib/utils/useViewportAction";
  import { fade, slide } from "svelte/transition";
  import Icon from "./Icon.svelte";
  import Testimonial from "./Testimonial.svelte";

  export let testimonials: TestimonialType[];

  const appearDuration = 12500;
  const clock = createClock(false);

  let testimonialWrapper: HTMLDivElement;
  let testimonialIdx = 0;
  let lastProgress = 0;
  let startTime = 0;

  $: progress = ($clock.time - startTime) / appearDuration;
  $: if (progress >= 1) {
    advanceCarousel();
  }

  function advanceCarousel(i?: number) {
    lastProgress = progress;
    testimonialIdx = i ?? (testimonialIdx + 1) % testimonials.length;
    startTime = $clock.time;
  }

  function onEnterViewport() {
    if (!$prefersReducedMotion) {
      clock.play();
    }
    advanceCarousel(0);
    testimonialWrapper.setAttribute("aria-live", "polite");
  }

  function onExitViewport() {
    clock.pause();
    testimonialWrapper.removeAttribute("aria-live");
  }

  function togglePlay() {
    if ($clock.paused) {
      clock.play();
    } else {
      clock.pause();
    }
  }
</script>

{#if testimonials.length === 1}
  {@const testimonial = testimonials[0]}

  <Testimonial
    quote={testimonial.content}
    name={testimonial.sourceName}
    desc={testimonial.sourceDescription}
    imageSrc={testimonial.sourceImage?.src}
  />
{:else if testimonials.length > 1}
  <div
    class="carousel"
    use:viewport
    on:enterViewport={onEnterViewport}
    on:exitViewport={onExitViewport}
  >
    <div class="guide" class:paused={$clock.paused}>
      {#if !$prefersReducedMotion}
        <button class="pause" on:click={togglePlay}>
          <Icon icon={$clock.paused ? "play" : "pause"} style="height: 75%;" />
        </button>
      {/if}

      {#each testimonials as testimonial, i}
        {@const active = testimonialIdx === i}
        <button
          class="item"
          class:active
          style:--progress={active ? progress : lastProgress}
          on:click={() => {
            clock.pause();
            advanceCarousel(i);
          }}
          on:pointerenter={() => {
            if (active) {
              clock.pause();
            }
          }}
          on:pointerleave={() => {
            if (!$prefersReducedMotion) {
              clock.play();
            }
          }}
        >
          {#if testimonial.sourceImage}
            <img
              src={setImageHeight(testimonial.sourceImage.src, 100)}
              alt={testimonial.sourceName}
            />
          {:else}
            {testimonial.sourceName}
          {/if}
        </button>
      {/each}
    </div>

    {#key testimonialIdx}
      <div
        class="testimonial-wrapper"
        aria-relevant="additions"
        out:slide={{ duration: 200 }}
        in:fade={{ delay: 200, duration: 200 }}
        bind:this={testimonialWrapper}
        on:pointerenter={clock.pause}
        on:pointerleave={clock.play}
        on:outrostart={(e) =>
          e.currentTarget.setAttribute("aria-hidden", "true")}
      >
        <Testimonial
          quote={testimonials[testimonialIdx].content}
          name={testimonials[testimonialIdx].sourceName}
          desc={testimonials[testimonialIdx].sourceDescription}
          imageSrc={testimonials[testimonialIdx].sourceImage?.src}
        />
      </div>
    {/key}
  </div>
{/if}

<style>
  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr;
  }

  .testimonial-wrapper {
    grid-area: 1 / 2 / 1 / 3;
    padding-left: 25px;
  }

  .guide {
    display: flex;
    flex-flow: column nowrap;
    padding-right: 25px;
    border-right: 1px solid var(--gray-light);
  }

  .guide > .item {
    position: relative;
    appearance: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    flex: 1;
  }

  .guide > .item + .item {
    border-top: 1px solid var(--gray-light);
  }

  .guide > .item::after {
    content: "";
    position: absolute;
    top: 10%;
    left: 100%;
    width: 5px;
    height: 80%;
    background-color: var(--blue);
    transform-origin: top;
    z-index: 10;
    opacity: 0;
    transform: scaleY(var(--progress));
    transition: opacity 400ms ease;
  }

  .guide > .item.active::after {
    transform: scaleY(var(--progress));
    opacity: 1;
  }

  .guide.paused > .item.active::after {
    transition: opacity 400ms ease, transform 100ms ease;
    transform: unset;
    opacity: 1;
  }

  .guide > .item > img {
    width: 50px;
    border-radius: 50%;
  }

  .pause {
    display: none;
    align-items: center;
    justify-content: center;
    color: black;
    cursor: pointer;
    border: none;
    border-right: 1px solid var(--gray-light);
    appearance: none;
  }

  @media (max-width: 750px) or (pointer: coarse) or (hover: none) {
    .carousel {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr min-content;
      gap: 25px;
      transition: all 1000ms ease;
    }

    .testimonial-wrapper {
      grid-area: 1 / 1 / 2 / 2;
    }

    .guide {
      display: flex;
      flex-flow: initial;
      padding: 0;
      padding-top: 25px;
      border: none;
      border-top: 1px solid var(--gray-light);
    }

    .guide > .item::after {
      left: 10%;
      top: 100%;
      width: 80%;
      height: 5px;
      transform-origin: top left;
      transform: scaleX(var(--progress));
    }

    .guide > .item.active::after {
      transform: scaleX(var(--progress));
    }

    .guide > .item + .item {
      border: none;
      border-left: 1px solid var(--gray-light);
    }

    .pause {
      display: flex;
    }
  }
</style>
