import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

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
