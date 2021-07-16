<script lang="ts">
  export let color = "#fff";
  export let id: string | undefined = undefined;
  export let padding = "0";
  export let longForm = false;
</script>

<section id="{id}" class="row-center" style="background-color: {color}">
  <div
    class="section-content{longForm ? ' long-form' : ''}"
    style="padding: {padding} 0"
  >
    <slot />
  </div>
</section>

<style>
  section {
    width: 100%;
  }

  .section-content {
    max-width: var(--content-width);
    width: 100%;
  }

  .long-form {
    max-width: var(--long-form-width);
  }
</style>
