<script lang="ts">
  // title, content, and route (for button)
  export let quote: string;
  export let imageSrc: string | undefined = undefined;
  export let name: string;
  export let desc: string;
</script>

<div class="wrap">
  <div class="testimonial">
    {#if imageSrc !== undefined}
      <div class="left">
        <p>{quote}</p>
        <caption>
          {name}<br />
          <span class="desc">{desc}</span>
        </caption>
      </div>
      <div class="right">
        <img src={imageSrc} alt={name + "'s photo"} />
      </div>
    {:else}
      <div class="center">
        <p>{quote}</p>
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
    width: 80%;
    display: flex;
    flex-flow: row;
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

  p {
    text-align: justify;
    text-justify: newspaper;
    font-size: 1.2rem;
  }

  caption {
    text-align: right;
    font-size: 1rem;
    display: block;
  }

  caption > span.desc {
    font-size: 0.8rem;
  }

  .right {
    max-width: 290px;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--gray-light);
  }

  .right > img {
    width: 100%;
    min-height: 290px;
  }
</style>
