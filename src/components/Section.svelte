<script lang="ts">
  export let color: string = "#fff";
  export let id: string | undefined = undefined;
  export let padding: string = "0";
  export let longForm: boolean = false;
</script>

<section {id} class="row-center" style="background-color: {color}">
  <div
    class="section-content{longForm ? ' long-form' : ''}"
    style="padding: {padding}"
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
