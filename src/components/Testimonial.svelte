<script lang="ts">
  import { setImageHeight } from "$utils/schema";

  import Button from "./Button.svelte";
  import Row from "./Row.svelte";

  // title, content, and route (for button)
  export let quote: string;
  export let imageSrc: string | undefined = undefined;
  export let name: string;
  export let desc: string;
  export let meetTheTeam = false;
</script>

<div class="wrap">
  <div class="testimonial">
    {#if imageSrc !== undefined}
      <Row>
        <div class="left">
          <blockquote>{quote}</blockquote>
          <caption>
            {name}<br />
            <span class="desc">{desc}</span>
          </caption>
          {#if meetTheTeam}
            <Button type="primary" href="/about/team">Meet The Team</Button>
          {/if}
        </div>
        <div class="right">
          <img src={setImageHeight(imageSrc, 400)} alt={name + "'s photo"} />
        </div>
      </Row>
    {:else}
      <div class="center">
        <blockquote>{quote}</blockquote>
        <caption>
          {name}<br />
          <span class="desc">{desc}</span>
        </caption>
      </div>
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
    display: block;
    box-sizing: border-box;
  }

  blockquote {
    padding: 0;
    margin: 0;
    text-align: justify;
    text-justify: newspaper;
    font-size: 1rem;
  }
  /* blockquote::before,
  blockquote::after {
    content: '"';
  } */

  caption {
    text-align: right;
    font-size: 1rem;
    display: block;
    margin-top: 1rem;
  }

  caption > span.desc {
    font-size: 0.8rem;
  }

  .right {
    flex: auto !important;
    max-width: 12rem;
    overflow: hidden;
  }

  .right > img {
    height: 12rem;
    aspect-ratio: 1;
    border-radius: 50%;
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
