// adapted from https://svelte.dev/repl/c6a402704224403f96a3db56c2f48dfc?version=3.31.2
let intersectionObserver: IntersectionObserver | undefined;

function ensureIntersectionObserver() {
  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";
      entry.target.dispatchEvent(new CustomEvent(eventName));
    });
  });
}

export default function viewport(element: HTMLElement) {
  if (element) {
    ensureIntersectionObserver();

    intersectionObserver!.observe(element);

    return {
      destroy() {
        intersectionObserver!.unobserve(element);
      },
    };
  }
}
