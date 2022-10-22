<script lang="ts">
  import Button from "../Button.svelte";

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
  <Button
    href={to}
    type="secondary-custom"
    size="small"
    backgroundColor="var(--blue-darker)"
    textColor="var(--blue-darker)"
  >
    {linkText}
  </Button>
</div>

<style>
  .info-box {
    box-sizing: border-box;
    padding: 17px;
    border: 1.5px solid var(--blue-darker);
    border-radius: 4px;
    margin: 1rem 0 0;
    color: var(--blue-darker);
  }

  h4 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
</style>
