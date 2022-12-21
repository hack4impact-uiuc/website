import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => {
  return /^(nonprofits|sponsors|students)$/.test(param);
};
