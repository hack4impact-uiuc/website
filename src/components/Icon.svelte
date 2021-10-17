<script context="module" lang="ts">
  import Brain from "@svicons/boxicons-regular/brain.svelte";
  import Bulb from "@svicons/boxicons-solid/bulb.svelte";
  import Calendar from "@svicons/boxicons-solid/calendar.svelte";
  import Code from "@svicons/boxicons-regular/code-alt.svelte";
  import Conversation from "@svicons/boxicons-solid/conversation.svelte";
  import Devices from "@svicons/boxicons-solid/devices.svelte";
  import Edit from "@svicons/boxicons-regular/edit.svelte";
  import Heart from "@svicons/boxicons-solid/heart.svelte";
  import Question from "@svicons/boxicons-regular/question-mark.svelte";
  import Search from "@svicons/boxicons-regular/search.svelte";
  import Slideshow from "@svicons/boxicons-solid/slideshow.svelte";
  import Transfer from "@svicons/boxicons-regular/transfer-alt.svelte";
  import Vector from "@svicons/boxicons-solid/vector.svelte";
  import type { SvelteComponent } from "svelte";

  type IconType =
    | "brain"
    | "bulb"
    | "calendar"
    | "code"
    | "conversation"
    | "devices"
    | "edit"
    | "heart"
    | "question"
    | "search"
    | "slideshow"
    | "transfer"
    | "vector";

  const iconMap: Record<IconType, typeof SvelteComponent> = {
    brain: Brain,
    bulb: Bulb,
    calendar: Calendar,
    code: Code,
    conversation: Conversation,
    devices: Devices,
    edit: Edit,
    heart: Heart,
    question: Question,
    search: Search,
    slideshow: Slideshow,
    transfer: Transfer,
    vector: Vector,
  };
</script>

<script lang="ts">
  export let icon: IconType;
</script>

<svelte:component this={iconMap[icon]} />
