<script context="module" lang="ts">
  import Book from "@svicons/boxicons-solid/book.svelte";
  import Brain from "@svicons/boxicons-regular/brain.svelte";
  import Bulb from "@svicons/boxicons-solid/bulb.svelte";
  import Calendar from "@svicons/boxicons-solid/calendar.svelte";
  import Code from "@svicons/boxicons-regular/code-alt.svelte";
  import Chalkboard from "@svicons/boxicons-solid/chalkboard.svelte";
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
  import Tag from "@svicons/boxicons-solid/tag.svelte";
  import Tree from "@svicons/boxicons-solid/tree.svelte";
  import DonateHeart from "@svicons/boxicons-solid/donate-heart.svelte";
  import Shield from "@svicons/boxicons-solid/shield.svelte";
  import MessageX from "@svicons/boxicons-solid/message-x.svelte";
  import News from "@svicons/boxicons-solid/news.svelte";
  import Dollar from "@svicons/boxicons-solid/badge-dollar.svelte";
  import Plane from "@svicons/boxicons-solid/plane-alt.svelte";
  import Unlink from "@svicons/boxicons-regular/unlink.svelte";
  import Coffee from "@svicons/boxicons-solid/coffee.svelte";
  import Group from "@svicons/boxicons-solid/group.svelte";
  import ChevronCompactRight from "@svicons/boxicons-solid/chevron-right.svelte";

  import type { ComponentType, SvelteComponentTyped } from "svelte";

  export type IconType =
    | "brain"
    | "bulb"
    | "book"
    | "calendar"
    | "code"
    | "coffee"
    | "chalkboard"
    | "conversation"
    | "devices"
    | "edit"
    | "heart"
    | "question"
    | "group"
    | "search"
    | "slideshow"
    | "transfer"
    | "vector"
    | "health"
    | "education"
    | "tag"
    | "tree"
    | "donate"
    | "shield"
    | "hate"
    | "news"
    | "dollar"
    | "plane"
    | "unlink"
    | "chevron-right";

  const iconMap: Record<
    IconType,
    ComponentType<
      SvelteComponentTyped<
        svelte.JSX.SVGAttributes<SVGElementTagNameMap["svg"]>
      >
    >
  > = {
    brain: Brain,
    bulb: Bulb,
    book: Book,
    calendar: Calendar,
    code: Code,
    coffee: Coffee,
    chalkboard: Chalkboard,
    conversation: Conversation,
    devices: Devices,
    edit: Edit,
    heart: Heart,
    question: Question,
    group: Group,
    search: Search,
    slideshow: Slideshow,
    tag: Tag,
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
    "chevron-right": ChevronCompactRight,
  };
</script>

<script lang="ts">
  export let icon: IconType;

  interface $$Props
    extends svelte.JSX.SVGAttributes<SVGElementTagNameMap["svg"]> {
    icon: IconType;
  }
</script>

<svelte:component this={iconMap[icon]} {...$$restProps} />
