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
  import Health from "@svicons/boxicons-regular/health.svelte";
  import Graduation from "@svicons/boxicons-solid/graduation.svelte";
  import Tree from "@svicons/boxicons-solid/tree.svelte";
  import DonateHeart from "@svicons/boxicons-solid/donate-heart.svelte";
  import Shield from "@svicons/boxicons-solid/shield.svelte";
  import MessageX from "@svicons/boxicons-solid/message-x.svelte";
  import News from "@svicons/boxicons-solid/news.svelte";
  import Dollar from "@svicons/boxicons-solid/badge-dollar.svelte";
  import Plane from "@svicons/boxicons-solid/plane-alt.svelte";
  import Unlink from "@svicons/boxicons-regular/unlink.svelte";

  import type { SvelteComponent } from "svelte";

  export type IconType =
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
    | "vector"
    | "health"
    | "education"
    | "tree"
    | "donate"
    | "shield"
    | "hate"
    | "news"
    | "dollar"
    | "plane"
    | "unlink";

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
    health: Health,
    education: Graduation,
    tree: Tree,
    donate: DonateHeart,
    shield: Shield,
    hate: MessageX,
    news: News,
    dollar: Dollar,
    plane: Plane,
    unlink: Unlink,
  };
</script>

<script lang="ts">
  export let icon: IconType;
</script>

<svelte:component this={iconMap[icon]} />
