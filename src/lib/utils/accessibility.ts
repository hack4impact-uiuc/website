import { browser } from "$app/environment";
import { readable } from "svelte/store";

export function mediaQuery(queryString: string) {
  if (!browser) {
    return readable(true);
  }

  const query = window.matchMedia(queryString);

  return readable(query.matches, (set) => {
    const onQueryChange = (event: MediaQueryListEvent) => set(event.matches);

    query.addEventListener("change", onQueryChange);

    return () => query.removeEventListener("change", onQueryChange);
  });
}

export const prefersReducedMotion = mediaQuery(
  "(prefers-reduced-motion: reduce)"
);
