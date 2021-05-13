<script lang="ts">
  // export let icon: string;
</script>

<div class="value row-center">
  <span><div id="icon-placeholder" /></span>
  <span>
    <h3><slot name="name" /></h3>
    <p><slot name="description" /></p>
  </span>
</div>

<style>
  h3 {
    color: var(--blue-darker);
    font-size: 1.2rem;
  }

  p {
    opacity: 80%;
  }

  #icon-placeholder {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: var(--blue-darker);
    margin-right: 40px;
  }

  .value {
    margin: 20px 0;
  }

  .value > span:first-child {
    align-self: flex-start;
  }
</style>
