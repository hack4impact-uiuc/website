import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [sveltekit()],
  envPrefix: "CLIENT_",
  resolve: {
    alias: {
      $utils: resolve("./src/utils"),
      $components: resolve("./src/components"),
      $hooks: resolve("./src/hooks.ts"),
    },
  },
});
