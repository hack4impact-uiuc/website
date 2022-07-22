import dotenv from "dotenv";
import { ContentWrapper } from "$utils/api";
import { minify, type Options } from "html-minifier-terser";
import { prerendering } from "$app/env";
import type { Handle } from "@sveltejs/kit";

dotenv.config();

const { CONTENTFUL_DELIVERY_KEY, CONTENTFUL_SPACE_ID } = process.env;

export const contentWrapper = new ContentWrapper(
  CONTENTFUL_SPACE_ID!,
  CONTENTFUL_DELIVERY_KEY!
);

const minificationOptions: Options = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeTagWhitespace: true,
  useShortDoctype: true,
};

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  if (prerendering && response.headers.get("content-type") === "text/html") {
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
