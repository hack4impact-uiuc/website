import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

// Redirect old links to apply/(nonprofits|sponors|students) to new page join/$1
// This won't be prerendered because of the route parameter "page"
export const load: PageLoad = async ({ url }) => {
  throw redirect(301, url.pathname.replace("apply", "join"));
};
