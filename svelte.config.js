import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    inlineStyleThreshold: 1024,
    env: {
      publicPrefix: "CLIENT_",
    },
  },

  vitePlugin: {
    experimental: {
      inspector: {
        holdMode: true,
      },
    },
  },
};

export default config;
