import type { ActionReturn } from "svelte/action";

type EventHandler = (e: CustomEvent) => void;

type Attributes = {
  "on:enterViewport"?: EventHandler;
  "on:exitViewport"?: EventHandler;
};

// adapted from https://svelte.dev/repl/c6a402704224403f96a3db56c2f48dfc?version=3.31.2
let intersectionObserver: IntersectionObserver | undefined;

export default function viewport(
  element: HTMLElement
): ActionReturn<void, Attributes> {
  const intersectionObserver = ensureIntersectionObserver();

  intersectionObserver.observe(element);

  return {
    destroy() {
      intersectionObserver.unobserve(element);
    },
  };
}

function ensureIntersectionObserver() {
  if (intersectionObserver) return intersectionObserver;

  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";
      entry.target.dispatchEvent(new CustomEvent(eventName));
    });
  });
  return intersectionObserver;
}
