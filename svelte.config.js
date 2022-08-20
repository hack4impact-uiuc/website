import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      fallback: "404.html",
    }),
    prerender: {
      default: true,
    },
    inlineStyleThreshold: 1024,
  },
};

export default config;
