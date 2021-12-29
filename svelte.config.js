import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    files: {
      lib: "src",
    },
    prerender: {
      entries: ["*", "/404"],
    },
    vite: () => ({
      envPrefix: "CLIENT_",
    }),
  },
};

export default config;
