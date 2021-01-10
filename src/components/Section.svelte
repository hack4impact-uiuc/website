<script lang="ts">
  export let color: string = "#fff";
  export let id: string | undefined = undefined;
  export let padding: string = "0";
</script>

<style>
  section {
    width: 100%;
  }

  .section-content {
    max-width: var(--content-width);
    width: 100%;
  }
</style>

<section {id} class="row-center" style="background-color: {color}">
  <div class="section-content" style="padding: {padding}">
    <slot />
  </div>
</section>
