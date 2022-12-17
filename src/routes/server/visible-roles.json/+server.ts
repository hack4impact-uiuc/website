import { json } from "@sveltejs/kit";
import { contentWrapper } from "src/hooks.server";
import type { Role } from "src/lib/utils/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const roles: Role[] = await contentWrapper.get("role", {
    order: "-fields.open",
    "fields.visible": true,
  });

  throw new Error(
    "@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)"
  );
  // Suggestion (check for correctness before using):
  // return json(roles);
  return {
    body: roles,
  };
};
