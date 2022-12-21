import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

// Redirect old links to apply/(nonprofits|sponors|students) to new page join/$1
export const load: PageLoad = async ({ url }) => {
  throw redirect(301, url.pathname.replace("apply", "join"));
};
