<script lang="ts">
  // title, content, and route (for button)
  export let quote: string;
  export let imageSrc: string;
  export let name: string;
  export let desc: string;
</script>

<div class="wrap">
  <div class="testimonial">
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
    display: block;
    box-sizing: border-box;
    padding-right: 50px;
  }

  .left > p {
    text-align: justify;
    text-justify: newspaper;
    font-size: 23px;
  }

  .left > caption {
    text-align: right;
    font-size: 20px;
    display: block;
  }

  .left > caption > span.desc {
    font-size: 16px;
  }

  .right {
    flex: 3;
    max-width: 290px;
  }

  .right > img {
    width: 100%;
    border-radius: 50%;
  }
</style>
