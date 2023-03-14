<script context="module" lang="ts">
  const iconMap = {
    brain: "bx:brain",
    code: "bx:code-alt",
    edit: "bx:edit",
    health: "bx:health",
    question: "bx:question-mark",
    search: "bx:search",
    transfer: "bx:transfer-alt",
    unlink: "bx:unlink",
    dollar: "bxs:badge-dollar",
    book: "bxs:book",
    bulb: "bxs:bulb",
    calendar: "bxs:calendar",
    chalkboard: "bxs:chalkboard",
    "chevron-right": "bxs:chevron-right",
    coffee: "bxs:coffee",
    conversation: "bxs:conversation",
    devices: "bxs:devices",
    donate: "bxs:donate-heart",
    education: "bxs:graduation",
    group: "bxs:group",
    heart: "bxs:heart",
    hate: "bxs:message-x",
    news: "bxs:news",
    plane: "bxs:plane-alt",
    shield: "bxs:shield",
    slideshow: "bxs:slideshow",
    tag: "bxs:tag",
    tree: "bxs:tree",
    vector: "bxs:vector",
    volunteering: "bxs:home-heart",
  };

  export type IconType = keyof typeof iconMap;
</script>

<script lang="ts">
  import Icon from "@iconify/svelte";

  export let icon: IconType;
  export let width: string | number = "100%";
  export let height: string | number = "100%";
  export let color: string = "currentColor";
</script>

<Icon icon={iconMap[icon]} {width} {height} {color} />
