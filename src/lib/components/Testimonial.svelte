<script lang="ts">
  import { setImageHeight } from "$lib/utils/schema";
  import Dialog from "./Dialog.svelte";
  import Row from "./Row.svelte";

  // title, content, and route (for button)
  export let quote: string;
  export let imageSrc: string | undefined = undefined;
  export let name: string;
  export let desc: string;

  let dialog: Dialog;

  $: firstParagraph = quote.slice(0, quote.indexOf("</p>")) + "</p>";
  $: needsReadMore = quote.length > firstParagraph.length;
  $: text = firstParagraph.replace(/<\/?p>/gi, "");
</script>

<div class="wrap">
  <div class="testimonial">
    {#if imageSrc !== undefined}
      <Row>
        <div class="left">
          <figure>
            <blockquote>
              {@html text}{needsReadMore ? ".." : ""}

              {#if needsReadMore}
                <button class="readmore" on:click={dialog.open}>
                  Read more
                </button>
              {/if}
            </blockquote>
            <figcaption>
              {name}<br />
              <span class="desc">{desc}</span>
            </figcaption>
          </figure>
        </div>
        <div class="right">
          <img src={setImageHeight(imageSrc, 400)} alt={name} />
        </div>
      </Row>
    {:else}
      <figure class="center">
        <blockquote>
          {@html text}

          {#if needsReadMore}
            <button class="readmore" on:click={dialog.open}>Read more</button>
          {/if}
        </blockquote>
        <figcaption>
          {name}<br />
          <span class="desc">{desc}</span>
        </figcaption>
      </figure>
    {/if}

    <Dialog bind:this={dialog}>
      {@html quote}

      <button class="readmore" on:click={dialog.close}>Read less</button>
    </Dialog>
  </div>
</div>

<style>
  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 30px;
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
    cursor: pointer;
    color: var(--blue-light);
    padding: 0;
    font-size: 0.75em;
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
      padding-block: 0;
      padding-bottom: 10px;
    }
  }
</style>
