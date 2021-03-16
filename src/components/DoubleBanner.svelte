<script lang="ts">
  export let leftColor: string = "#fff";
  export let rightColor: string = "#fff";
</script>

<section class="row-center">
  <div
    id="banner-left"
    class="banner column-center"
    style="background-color: {leftColor}"
  >
    <div id="banner-left-content">
      <slot name="left" />
    </div>
  </div>
  <div id="banner-right" class="banner" style="background-color: {rightColor}">
    <div id="banner-right-content"><slot name="right" /></div>
  </div>
</section>

<style>
  section {
    margin: 0;
    padding: 0;
  }

  .banner {
    height: 600px;
  }

  @media (min-width: 2160px) {
    .banner {
      height: 720px;
    }
  }

  #banner-left {
    width: 50%;
    color: #fff;
  }

  #banner-right {
    width: 50%;
  }

  #banner-left-content {
    padding-left: calc(100% - calc(var(--content-width) / 2));
    padding-right: 20%;
    width: 100%;
    /* height: 100%; */
    box-sizing: border-box;
  }
  #banner-right-content {
    padding-right: calc(100% - calc(var(--content-width) / 2));
    padding-left: 20%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
</style>
