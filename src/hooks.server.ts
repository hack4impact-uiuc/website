import { minify, type Options } from "html-minifier-terser";
import { building } from "$app/environment";
import type { Handle } from "@sveltejs/kit";
// import {
//   CONTENTFUL_DELIVERY_KEY,
//   CONTENTFUL_PREVIEW_FLAG,
//   CONTENTFUL_PREVIEW_KEY,
//   CONTENTFUL_SPACE_ID,
// } from "$env/static/private";
import { env } from "$env/dynamic/private";
import { ContentWrapper } from "$lib/utils/api";

const contentfulPreviewSearchParam = "preview";

const CONTENTFUL_DELIVERY_KEY: string | undefined = env.CONTENTFUL_DELIVERY_KEY;
const CONTENTFUL_PREVIEW_FLAG: string | undefined = env.CONTENTFUL_PREVIEW_FLAG;
const CONTENTFUL_PREVIEW_KEY: string | undefined = env.CONTENTFUL_PREVIEW_KEY;
const CONTENTFUL_SPACE_ID: string | undefined = env.CONTENTFUL_SPACE_ID; 

const isPreview = (url: URL) =>
  url.searchParams.get(contentfulPreviewSearchParam) ===
  CONTENTFUL_PREVIEW_FLAG;

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
  event.locals.contentWrapper = new ContentWrapper(
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_KEY,
    !building && isPreview(event.url) ? CONTENTFUL_PREVIEW_KEY : undefined
  );

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
