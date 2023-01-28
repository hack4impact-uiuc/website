<script lang="ts">
  import type { Testimonial as TestimonialType } from "$lib/utils/schema";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";

  import Section from "./Section.svelte";
  import Testimonial from "./Testimonial.svelte";

  export let testimonials: TestimonialType[];

  let scroller: HTMLDivElement;
  let hasPrevious = false;
  let hasNext = false;

  $: testimonialComponents = testimonials.map(() => ({})) as {
    elem?: HTMLDivElement;
    component?: Testimonial;
  }[];
  $: console.log(testimonialComponents);
  onMount(() => {
    const observerOptions = {
      root: scroller,
      rootMargin: "0px",
      threshold: [0, 0.15, 1],
    };

    const observer = new IntersectionObserver((observerEntries) => {
      for (const entry of observerEntries) {
        if (entry.target == testimonialComponents[0].elem) {
          hasPrevious = entry.intersectionRatio < 0.25;
        } else {
          hasNext = entry.intersectionRatio < 0.25;
        }
      }
    }, observerOptions);

    observer.observe(testimonialComponents[0].elem!);
    observer.observe(
      testimonialComponents[testimonialComponents.length - 1].elem!
    );

    return observer.disconnect;
  });

  async function scroll(direction: "left" | "right") {
    const scrollAmount = 100;
    const sign = direction === "left" ? -1 : 1;
    testimonialComponents.forEach((component) => component.component!.close());
    scroller.parentElement?.scrollBy({
      behavior: "smooth",
      left: scrollAmount * sign,
    });
  }
</script>

<Section id="testimonial" padding="40px" color="var(--gray-lighter)">
  <div class="column-center" bind:this={scroller}>
    <div class="carousel">
      {#each testimonials as testimonial, i (testimonial)}
        <div
          class="testimonial-wrapper"
          bind:this={testimonialComponents[i].elem}
        >
          <Testimonial
            quote={testimonial.content}
            name={testimonial.sourceName}
            desc={testimonial.sourceDescription}
            imageSrc={testimonial.sourceImage?.src}
            bind:this={testimonialComponents[i].component}
          />
        </div>
      {/each}
    </div>
  </div>
  {#if hasPrevious}
    <div class="page-button" transition:fade>
      <Button type="primary" on:click={() => scroll("left")}>
        <Icon icon="left-arrow" width="2em" height="2em" />
      </Button>
    </div>
  {/if}
  {#if hasNext}
    <div class="page-button" transition:fade>
      <Button type="primary" on:click={() => scroll("right")}>
        <Icon icon="right-arrow" width="2em" height="2em" />
      </Button>
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
    left: calc(calc(100vw - var(--content-width)) / 2);
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
    right: calc(calc(100vw - var(--content-width)) / 2);
    background: linear-gradient(-90deg, var(--gradient-colors));
  }

  .page-button {
    position: absolute;
    top: 75%;
    left: calc(calc(100vw - var(--content-width)) / 2);
    transform: translateY(-50%);
    transition: opacity 150ms ease-in;
    z-index: 21;
  }

  .page-button:last-child {
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
    --hidden-percent-of-empty-space: 0.5;
    gap: calc(
      calc(calc(var(--content-width) - var(--long-form-width)) / 2) *
        var(--hidden-percent-of-empty-space)
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

  @media (max-width: 900px) {
    .carousel {
      --hidden-percent-of-empty-space: 0.65;
    }

    .page-button {
      top: unset;
      bottom: 0;
    }
  }
</style>
