import { redirect } from "@sveltejs/kit";

// Redirect old links to apply/(nonprofits|sponors|students) to new page join/$1
export async function load({ url }) {
  throw redirect(301, url.pathname.replace("apply", "join"));
}
