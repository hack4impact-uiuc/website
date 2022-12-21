<script lang="ts">
  import Button from "./Button.svelte";
</script>

<div class="skip-link-wrapper">
  <Button href="#content" type="primary">Skip to content</Button>
</div>

<style>
  .skip-link-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    margin: 0;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }

  .skip-link-wrapper:focus-within {
    z-index: 9999;
    width: auto;
    height: auto;
    clip: auto;
  }
</style>
