import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from "@sveltejs/kit";

export const load: LayoutLoad = async ({ url }) => {
  throw redirect(301, url.pathname.replace("apply", "join"));
};
