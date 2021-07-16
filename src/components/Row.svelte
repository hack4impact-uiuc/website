<script lang="ts">
  export let reverse: boolean = false;
  export let reverseOnMobile: boolean = false;
  export let gap: number | undefined = undefined;
</script>

<article
  class:reversed="{!!reverse}"
  class:mobileReversed="{!!reverseOnMobile}"
  style="--row-gap: {gap ? gap : 0}px"
>
  <slot />
</article>

<style>
  article {
    display: flex;
  }

  article.reversed {
    flex-direction: row-reverse;
  }

  article > :global(*) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
  }

  article > :global(*) + :global(*) {
    margin-left: var(--row-gap);
  }

  article.reversed > :global(*) + :global(*) {
    margin: 0 var(--row-gap) 0 0;
  }

  @media screen and (max-width: 800px) {
    article {
      flex-direction: column;
    }

    article.mobileReversed,
    article.reversed {
      flex-direction: column-reverse;
    }

    article > :global(*) {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    article > :global(*):not(:last-child) {
      margin-top: calc(var(--row-gap) / 2);
    }

    article:not(.mobileReversed):not(.reversed) > :global(*) {
      margin-bottom: 0;
      margin-top: calc(var(--row-gap) / 2);
    }
  }
</style>
