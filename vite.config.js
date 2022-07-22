import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $utils: resolve("./src/utils"),
      $components: resolve("./src/components"),
      $hooks: resolve("./src/hooks.ts"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
