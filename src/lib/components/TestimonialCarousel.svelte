<script lang="ts">
  import type { Testimonial as TestimonialType } from "$lib/utils/schema";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";

  import Section from "./Section.svelte";
  import Testimonial from "./Testimonial.svelte";

  export let testimonials: TestimonialType[];

  let scrollerChild: HTMLDivElement;
  let hasPrevious = false;
  let hasNext = false;
  let viewingIndex = 0;
  let testimonialElements = [] as HTMLDivElement[];

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

        if (entry.target == testimonialElements[0]) {
          hasPrevious = entry.intersectionRatio <= 0.25;
        } else if (
          entry.target === testimonialElements[testimonialElements.length - 1]
        ) {
          hasNext = entry.intersectionRatio <= 0.25;
        }
      }
    }, observerOptions);

    for (const element of testimonialElements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  });

  async function scroll(direction: "left" | "right") {
    const scrollAmount = 100;
    const sign = direction === "left" ? -1 : 1;
    scrollerChild.parentElement?.scrollBy({
      behavior: "smooth",
      left: scrollAmount * sign,
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
  {#if hasPrevious}
    <div class="page-button prev" transition:fade|local>
      <Button type="primary" on:click={() => scroll("left")}>
        <Icon icon="left-arrow" width="2em" height="2em" />
      </Button>
    </div>
  {/if}
  {#if hasNext}
    <div class="page-button next" transition:fade|local>
      <Button type="primary" on:click={() => scroll("right")}>
        <Icon icon="right-arrow" width="2em" height="2em" />
      </Button>
    </div>
  {/if}
  {#if testimonials.length > 1}
    <div class="guide">
      {#each testimonials as _, i}
        <button
          aria-label="See testimonial {i + 1}"
          class:active={viewingIndex === i}
          on:click={() =>
            testimonialElements[i].scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            })}
        />
      {/each}
    </div>
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

  .page-button {
    position: absolute;
    top: 85%;
    left: calc(calc(100vw - var(--content-width)) / 2);
    transform: translateY(-50%);
    transition: opacity 150ms ease-in;
    z-index: 21;
  }

  .page-button.next {
    left: unset;
    right: calc(calc(100vw - var(--content-width)) / 2);
  }

  .column-center {
    max-width: var(--long-form-width);
    margin-inline: auto;
  }

  .carousel {
    display: flex;
    width: 100%;
    gap: 60px;
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
    top: 85%;
    left: 50%;
    transform: translateX(-50%);
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

    .page-button {
      top: unset;
      bottom: 0;
    }

    .guide {
      top: unset;
      bottom: 35px;
    }
  }
</style>
