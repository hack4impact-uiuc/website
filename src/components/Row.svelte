<script lang="ts">
    export let reverse: boolean;
    export let gap: number | undefined;
</script>


<article class:reverse={reverse} style="--row-gap: {gap === undefined ? 0 : gap}px">
    <slot />
</article>

<style>
    article {
        display: flex;
    } 

    article.reverse {
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
</style>