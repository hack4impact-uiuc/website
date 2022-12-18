import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => {
  return /^(nonprofit|sponsors|students)$/.test(param);
};
