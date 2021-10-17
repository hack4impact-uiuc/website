<script context="module" lang="ts">
  import Brain from "@svicons/boxicons-regular/brain.svelte";
  import Code from "@svicons/boxicons-regular/code-alt.svelte";
  import Edit from "@svicons/boxicons-regular/edit.svelte";
  import Question from "@svicons/boxicons-regular/question-mark.svelte";
  import Search from "@svicons/boxicons-regular/search.svelte";
  import Transfer from "@svicons/boxicons-regular/transfer-alt.svelte";
  import Bulb from "@svicons/boxicons-solid/bulb.svelte";
  import Heart from "@svicons/boxicons-solid/heart.svelte";
  import Conversation from "@svicons/boxicons-solid/conversation.svelte";
  import Calendar from "@svicons/boxicons-solid/calendar.svelte";
  import Slideshow from "@svicons/boxicons-solid/slideshow.svelte";
</script>

<script lang="ts">
  export let icon: string;
</script>

{#if icon === "brain"}
  <Brain />
{:else if icon === "code"}
  <Code />
{:else if icon === "edit"}
  <Edit />
{:else if icon === "question"}
  <Question />
{:else if icon === "bulb"}
  <Bulb />
{:else if icon === "heart"}
  <Heart />
{:else if icon === "conversation"}
  <Conversation />
{:else if icon === "calendar"}
  <Calendar />
{:else if icon === "search"}
  <Search />
{:else if icon === "slideshow"}
  <Slideshow />
{:else if icon === "transfer"}
  <Transfer />
{:else}
  missing
{/if}
