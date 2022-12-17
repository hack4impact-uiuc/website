import { minify, type Options } from "html-minifier-terser";
import { building } from "$app/environment";
import type { Handle } from "@sveltejs/kit";

const minificationOptions: Options = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeTagWhitespace: true,
  useShortDoctype: true,
};

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  if (building && response.headers.get("content-type") === "text/html") {
    return new Response(
      await minify(await response.text(), minificationOptions),
      {
        status: response.status,
        headers: response.headers,
      }
    );
  }

  return response;
};
