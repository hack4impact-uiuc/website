<script lang="ts">
  import DoubleBanner from "../DoubleBanner.svelte";
  import Button from "../Button.svelte";
</script>

<style>
  h1 {
    font-size: 56px;
  }

  p {
    /* font-family: Open Sans; */
    opacity: 80%;
    font-size: 24px;
  }

  .banner-button {
    margin: 0 20px 20px 0;
    display: inline-block;
  }
</style>

<DoubleBanner leftColor="var(--blue)" rightColor="var(--blue-darker)">
  <h1>Software For Nonprofits</h1>
  <p>
    We are a team of UIUC students who create robust software for social good.
  </p>
  <div id="banner-button-row">
    <div class="banner-button">
      <a class="button-link" href="projects">
        <Button type="primary-white">See Our Work</Button>
      </a>
    </div>
    <div class="banner-button">
      <a class="button-link" href="join">
        <Button type="secondary-white">Work With Us</Button>
      </a>
    </div>
  </div>
</DoubleBanner>
