<script context="module" lang="ts">
  import brainFill from "@iconify-icons/bx/brain";
  import code_altFill from "@iconify-icons/bx/code-alt";
  import editFill from "@iconify-icons/bx/edit";
  import healthFill from "@iconify-icons/bx/health";
  import question_markFill from "@iconify-icons/bx/question-mark";
  import searchFill from "@iconify-icons/bx/search";
  import transfer_altFill from "@iconify-icons/bx/transfer-alt";
  import unlinkFill from "@iconify-icons/bx/unlink";
  import left_arrow_altFill from "@iconify-icons/bx/left-arrow-alt";
  import right_arrow_altFill from "@iconify-icons/bx/right-arrow-alt";
  import badge_dollarFill from "@iconify-icons/bxs/badge-dollar";
  import bookFill from "@iconify-icons/bxs/book";
  import bulbFill from "@iconify-icons/bxs/bulb";
  import calendarFill from "@iconify-icons/bxs/calendar";
  import chalkboardFill from "@iconify-icons/bxs/chalkboard";
  import chevron_rightFill from "@iconify-icons/bxs/chevron-right";
  import coffeeFill from "@iconify-icons/bxs/coffee";
  import conversationFill from "@iconify-icons/bxs/conversation";
  import devicesFill from "@iconify-icons/bxs/devices";
  import donate_heartFill from "@iconify-icons/bxs/donate-heart";
  import graduationFill from "@iconify-icons/bxs/graduation";
  import groupFill from "@iconify-icons/bxs/group";
  import heartFill from "@iconify-icons/bxs/heart";
  import home_heartFill from "@iconify-icons/bxs/home-heart";
  import message_xFill from "@iconify-icons/bxs/message-x";
  import newsFill from "@iconify-icons/bxs/news";
  import plane_altFill from "@iconify-icons/bxs/plane-alt";
  import shieldFill from "@iconify-icons/bxs/shield";
  import slideshowFill from "@iconify-icons/bxs/slideshow";
  import tagFill from "@iconify-icons/bxs/tag";
  import treeFill from "@iconify-icons/bxs/tree";
  import vectorFill from "@iconify-icons/bxs/vector";
  import Icon, { addIcon } from "@iconify/svelte/dist/OfflineIcon.svelte";

  const iconMap = {
    brain: { name: "brain", fill: brainFill },
    code: { name: "code-alt", fill: code_altFill },
    edit: { name: "edit", fill: editFill },
    health: { name: "health", fill: healthFill },
    question: { name: "question-mark", fill: question_markFill },
    search: { name: "search", fill: searchFill },
    transfer: { name: "transfer-alt", fill: transfer_altFill },
    unlink: { name: "unlink", fill: unlinkFill },
    dollar: { name: "badge-dollar", fill: badge_dollarFill },
    book: { name: "book", fill: bookFill },
    bulb: { name: "bulb", fill: bulbFill },
    calendar: { name: "calendar", fill: calendarFill },
    chalkboard: { name: "chalkboard", fill: chalkboardFill },
    "chevron-right": { name: "chevron-right", fill: chevron_rightFill },
    coffee: { name: "coffee", fill: coffeeFill },
    conversation: { name: "conversation", fill: conversationFill },
    devices: { name: "devices", fill: devicesFill },
    donate: { name: "donate-heart", fill: donate_heartFill },
    education: { name: "graduation", fill: graduationFill },
    group: { name: "group", fill: groupFill },
    heart: { name: "heart", fill: heartFill },
    hate: { name: "message-x", fill: message_xFill },
    news: { name: "news", fill: newsFill },
    plane: { name: "plane-alt", fill: plane_altFill },
    shield: { name: "shield", fill: shieldFill },
    slideshow: { name: "slideshow", fill: slideshowFill },
    tag: { name: "tag", fill: tagFill },
    tree: { name: "tree", fill: treeFill },
    vector: { name: "vector", fill: vectorFill },
    volunteering: { name: "home-heart", fill: home_heartFill },
    "left-arrow": { name: "left-arrow-alt", fill: left_arrow_altFill },
    "right-arrow": { name: "right-arrow-alt", fill: right_arrow_altFill },
  } as const;

  for (const { name, fill } of Object.values(iconMap)) {
    addIcon(name, fill);
  }

  export type IconType = keyof typeof iconMap;
</script>

<script lang="ts">
  export let icon: IconType;
  export let width: string | number = "100%";
  export let height: string | number = "100%";
  export let inline: boolean | number = false;
  export let color = "currentColor";
</script>

<Icon icon={iconMap[icon].name} {width} {height} {color} {inline} />
