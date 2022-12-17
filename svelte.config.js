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
};

export default config;
