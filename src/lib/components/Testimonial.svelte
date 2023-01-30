<script lang="ts">
  import { setImageHeight } from "$lib/utils/schema";
  import { tick } from "svelte";
  import Button from "./Button.svelte";
  import Row from "./Row.svelte";

  // title, content, and route (for button)
  export let quote: string;
  export let imageSrc: string | undefined = undefined;
  export let name: string;
  export let desc: string;
  export let meetTheTeam = false;

  let blockquote: HTMLQuoteElement;
  let readMore = false;
  let slicedQuote = quote;

  $: slicedQuote = quote.slice(0, quote.indexOf("</p>"));
  $: needsReadMore = quote.length > slicedQuote.length + "</p>".length;
  $: text = readMore ? quote : slicedQuote + "</p>";

  async function toggle() {
    readMore = !readMore;
    if (!readMore) {
      await tick();
      blockquote.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
</script>

<div class="wrap">
  <div class="testimonial">
    {#if imageSrc !== undefined}
      <Row>
        <div class="left">
          <figure>
            <blockquote bind:this={blockquote}>
              {@html text}

              {#if needsReadMore}
                <button class="readmore" on:click={toggle}>
                  {readMore ? "Read less" : "Read more"}
                </button>
              {/if}
            </blockquote>
            <figcaption>
              {name}<br />
              <span class="desc">{desc}</span>
            </figcaption>
          </figure>
          {#if meetTheTeam}
            <Button type="primary" href="/about/team">Meet The Team</Button>
          {/if}
        </div>
        <div class="right">
          <img src={setImageHeight(imageSrc, 400)} alt={name} />
        </div>
      </Row>
    {:else}
      <figure class="center">
        <blockquote bind:this={blockquote}>
          {@html text}

          {#if needsReadMore}
            <button class="readmore" on:click={toggle}>
              {readMore ? "Read less" : "Read more"}
            </button>
          {/if}
        </blockquote>
        <figcaption>
          {name}<br />
          <span class="desc">{desc}</span>
        </figcaption>
      </figure>
    {/if}
  </div>
</div>

<style>
  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
  }

  .testimonial {
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  .testimonial > :global(*) {
    align-items: center;
  }

  .left {
    flex: 4;
    padding-right: 50px;
  }

  .left,
  .center {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    box-sizing: border-box;
  }

  blockquote {
    padding: 0;
    margin: 0;
    text-align: justify;
    font-size: 1rem;
  }

  figure {
    margin: 0;
  }

  figcaption {
    text-align: right;
    font-size: 1rem;
    display: block;
    margin-top: 1rem;
    align-self: flex-end;
  }

  figcaption > span.desc {
    font-size: 0.8rem;
  }

  .right {
    flex: auto !important;
    max-width: 12rem;
    overflow: hidden;
    align-self: flex-start;
  }

  .right > img {
    height: 12rem;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }

  .readmore {
    display: block;
    cursor: pointer;
    color: var(--gray-light);
    padding: 0;
    background-color: transparent;
    appearance: none;
    border: none;
    margin-left: auto;
  }

  @media screen and (max-width: 900px) {
    .right {
      display: none;
    }

    .left {
      padding: 0;
    }

    .testimonial {
      width: 100%;
    }

    .wrap {
      padding: 40px 0;
    }
  }
</style>
