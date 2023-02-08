<script lang="ts">
  import type { Testimonial as TestimonialType } from "$lib/utils/schema";
  import { onMount } from "svelte";
  import Icon from "./Icon.svelte";
  import Section from "./Section.svelte";
  import Testimonial from "./Testimonial.svelte";

  export let testimonials: TestimonialType[];

  let scrollerChild: HTMLDivElement;
  let testimonialElements = [] as HTMLDivElement[];
  let viewingIndex = 0;

  onMount(() => {
    const observerOptions = {
      root: scrollerChild?.parentElement,
      rootMargin: "0px",
      threshold: [0.25, 0.75, 1],
    };

    const observer = new IntersectionObserver((observerEntries) => {
      for (const entry of observerEntries) {
        if (entry.intersectionRatio >= 0.75) {
          viewingIndex = testimonialElements.findIndex(
            (elem) => entry.target === elem
          );
        }
      }
    }, observerOptions);

    for (const element of testimonialElements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  });

  async function scroll(index: number) {
    if (index < 0) {
      index = testimonialElements.length + index;
    }

    testimonialElements[index % testimonialElements.length].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }
</script>

<Section id="testimonial" padding="40px" color="var(--gray-lighter)">
  <div class="column-center" bind:this={scrollerChild}>
    <div class="carousel">
      {#each testimonials as testimonial, i (testimonial)}
        <div class="testimonial-wrapper" bind:this={testimonialElements[i]}>
          <Testimonial
            quote={testimonial.content}
            name={testimonial.sourceName}
            desc={testimonial.sourceDescription}
            imageSrc={testimonial.sourceImage?.src}
          />
        </div>
      {/each}
    </div>
  </div>
  {#if testimonials.length > 1}
    <div class="guide">
      {#each testimonials as _, i}
        <button
          aria-label="See testimonial {i + 1}"
          class:active={viewingIndex === i}
          on:click={() => scroll(i)}
        />
      {/each}
    </div>

    <button class="page-button prev" on:click={() => scroll(viewingIndex - 1)}>
      <Icon icon="left-arrow" width="2em" height="2em" />
    </button>
    <button class="page-button next" on:click={() => scroll(viewingIndex + 1)}>
      <Icon icon="right-arrow" width="2em" height="2em" />
    </button>
  {/if}
</Section>

<style>
  :global(#testimonial) {
    position: relative;
  }

  :global(#testimonial > :first-child) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  :global(#testimonial > :first-child::-webkit-scrollbar) {
    display: none;
  }

  :global(#testimonial)::before,
  :global(#testimonial)::after {
    content: "";
    position: absolute;
    top: 0;
    left: calc(calc(100% - var(--content-width)) / 2);
    height: 100%;
    width: calc(
      calc(calc(var(--content-width) - var(--long-form-width)) / 2) * 0.75
    );
    --gradient-colors: var(--gray-lighter), transparent;
    background: linear-gradient(90deg, var(--gradient-colors));
    z-index: 20;
  }

  :global(#testimonial)::after {
    left: unset;
    right: calc(calc(100% - var(--content-width)) / 2);
    background: linear-gradient(-90deg, var(--gradient-colors));
  }

  :where(.page-button) {
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    left: calc(calc(100vw - var(--content-width)) / 2);
    transform: translate(-75%, -50%);
    transition: opacity 150ms ease-in;
    z-index: 21;
    appearance: none;
    border: 1px solid black;
    border-radius: 50%;
    aspect-ratio: 1;
    cursor: pointer;
    background-color: white;
  }

  :where(.page-button.next) {
    left: unset;
    transform: translate(75%, -50%);
    right: calc(calc(100vw - var(--content-width)) / 2);
  }

  .column-center {
    max-width: var(--long-form-width);
    margin-inline: auto;
  }

  .carousel {
    display: flex;
    width: 100%;
    gap: max(
      calc(calc(var(--content-width) - var(--long-form-width)) / 2),
      60px
    );
  }

  .testimonial-wrapper {
    scroll-snap-align: center;
    flex: 0 0 100%;
    scroll-padding-block-end: 50px;
  }

  .testimonial-wrapper:last-of-type {
    /* Extra right padding since parent is left offset from scroll container */
    padding-right: calc(
      calc(var(--content-width) - var(--long-form-width)) / 2
    );
  }

  .guide {
    position: absolute;
    display: flex;
    gap: 10px;
    bottom: 75px;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  .guide > button {
    width: 10px;
    height: 10px;
    padding: 0;
    border-radius: 50%;
    cursor: pointer;
    appearance: none;
    border: none;
    background-color: var(--gray-light);
    transition: background-color 250ms ease;
  }

  .guide > button.active {
    background-color: black;
  }

  @media (max-width: 900px) {
    .carousel {
      gap: 40px;
    }

    .page-button,
    .guide {
      bottom: 35px;
      top: unset;
      transform: translateY(50%);
    }
  }
</style>
