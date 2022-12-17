import Button from "$components/Button.svelte";
import Head from "$components/Head.svelte";
import Member from "$components/Member.svelte";
import Section from "$components/Section.svelte";
import type { Image, Info, Member as MemberType } from "src/lib/utils/schema";
import type { PageLoad } from "@sveltejs/kit";

interface MembersResponse {
  active: MemberType[];
  alumni: MemberType[];
}

export const load: PageLoad = async ({ fetch }) => {
  const [members, info] = (await Promise.all([
    fetch("/server/members.json").then((res: Response) => res.json()),
    fetch("/server/info.json").then((res: Response) => res.json()),
  ])) as [MembersResponse, Info];

  return {
    ...members,
    team: info.chapterPicture,
  };
};
