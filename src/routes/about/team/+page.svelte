<script context="module" lang="ts">
  throw new Error(
    "@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)"
  );

  // import Button from "$components/Button.svelte";
  // import Head from "$components/Head.svelte";
  // import Member from "$components/Member.svelte";
  // import Section from "$components/Section.svelte";
  // import type { Image, Info, Member as MemberType } from "$lib/utils/schema";
  // import type { Load } from "@sveltejs/kit";

  // interface MembersResponse {
  //   active: MemberType[];
  //   alumni: MemberType[];
  // }

  // export const load: Load = async ({ fetch }) => {
  //   const [members, info] = (await Promise.all([
  //     fetch("/server/members.json").then((res: Response) => res.json()),
  //     fetch("/server/info.json").then((res: Response) => res.json()),
  //   ])) as [MembersResponse, Info];

  //   return {
  //     props: {
  //       ...members,
  //       team: info.chapterPicture,
  //     },
  //   };
  // };
</script>

<script lang="ts">
  throw new Error(
    "@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)"
  );

  export let active: MemberType[];
  export let alumni: MemberType[];
  export let team: Image;

  let showAllAlumni = false;

  function toggleAlumni(): void {
    showAllAlumni = true;
  }
</script>

<Head
  title="The Team | Hack4Impact UIUC"
  description="Uniting students to build well-engineered and impactful products for social change."
  url="https://uiuc.hack4impact.org/about/team"
  image={team.src}
/>

<Section>
  <h1 id="title">The Team</h1>
  <p>
    We are a team of UIUC students who collectively believe in and support each
    other towards <span id="meet-the-team-bold"
      >our goal of using technology as a medium for advancing the public
      interest</span
    >. Our members come from a variety of background and identities, and we use
    our differences to further our culture and create a thriving community of
    students. Many of us consider their fellow members as close friends,
    pursuing activities beyond the scope of the organization and their time at
    UIUC.
  </p>
  <p>
    Interested in being a part of the team? — check out our <a
      href="/join/students"
      sveltekit:prefetch>student page</a
    >!
  </p>
</Section>

<Section id="current" padding="30px">
  <section id="current">
    <h2>Current Members</h2>
    <div class="member-grid">
      {#each active as member}<Member {member} />{/each}
    </div>
  </section>
</Section>

<Section id="alumni" padding="30px">
  <section id="alumni">
    <h2>Alumni</h2>
    <div class="member-grid">
      {#each showAllAlumni ? alumni : alumni.slice(0, 12) as member}
        <Member {member} />
      {/each}
    </div>
    {#if !showAllAlumni && alumni.length > 12}
      <div id="show-all" class="row-center">
        <Button type="secondary" on:click={toggleAlumni}>Show All</Button>
      </div>
    {/if}
  </section>
</Section>

<style>
  #title {
    margin-top: 40px;
  }

  #show-all {
    margin-top: 40px;
  }

  .member-grid {
    --columns: 4;

    display: grid;
    grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
    column-gap: 60px;
    row-gap: 30px;
  }

  @media screen and (max-width: 1375px) {
    .member-grid {
      column-gap: 30px;
      --columns: 3;
    }
  }
  @media screen and (max-width: 1050px) {
    .member-grid {
      column-gap: 10px;
      row-gap: 1em;
      --columns: 2;
    }
  }

  #meet-the-team-bold {
    font-weight: bold;
  }
</style>
