<script lang="ts">
    export let reverse: boolean;
    export let gap: number | undefined;
</script>


<article class:reversed={!!reverse} style="--row-gap: {gap ? gap : 0}px">
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
</style>