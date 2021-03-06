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
      pages: ["*", "/404"],
    },
    vite: () =>
      process.env.NODE_ENV === "production"
        ? {
            optimizeDeps: {
              include: ["ackee-tracker", "contentful"],
            },
          }
        : {},
  },
};

export default config;
