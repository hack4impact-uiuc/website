<script lang="ts">
  import Button from "./Button.svelte";

  // title, content, and route (for button)
  export let title: string;
  export let content: string;
  export let to: string;
  export let linkText: string; // call-to-action text
</script>

<div class="info-box">
  <h4>{title}</h4>
  <p>
    {content}
  </p>
  <a href={to} sapper:prefetch>
    <Button
      type="secondary-custom"
      backgroundColor="var(--blue-darker)"
      textColor="var(--blue-darker)"
    >
      {linkText}
    </Button>
  </a>
</div>

<style>
  .info-box {
    box-sizing: border-box;
    padding: 17px;
    border: 2px solid var(--blue-darker);
    border-radius: 4px;
    margin: 100px 0;
    color: var(--blue-darker);
  }

  h4 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
</style>
