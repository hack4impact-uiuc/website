<script lang="ts">
  export let color: string = "#fff";
  export let id: string | undefined = undefined;
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
  <div class="section-content">
    <slot />
  </div>
</section>
