<script context="module" lang="ts">
  import Button from "../../components/Button.svelte";
  import Member from "../../components/Member.svelte";
  import Section from "../../components/Section.svelte";
  import type { Image, Info, Member as MemberType } from "../../utils/schema";

  /* @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch }) {
    const [members, info] = (await Promise.all([
      fetch("../server/members.json").then((res: Response) => res.json()),
      fetch("../server/info.json").then((res: Response) => res.json()),
    ])) as [MemberType[], Info];

    const roles = [
      "Co-Founder",
      "Co-Director",
      "Community Director",
      "External Director",
      "Tech Director",
      "Product Manager",
      "Tech Lead",
      "Academy Lead",
      "Product Research Lead",
      "Product Designer",
      "Software Developer",
      "Academy Member",
    ];

    members.sort((a, b) => a.graduationYear - b.graduationYear);
    members.sort((a, b) => roles.indexOf(a.role) - roles.indexOf(b.role));

    return {
      props: {
        active: members.filter((member) => member.active),
        alumni: members.filter((member) => !member.active),
        team: info.chapterPicture,
      },
    };
  }
</script>

<script lang="ts">
  export let active: MemberType[];
  export let alumni: MemberType[];
  export let team: Image;

  let showAllAlumni = false;

  function toggleAlumni(): void {
    showAllAlumni = true;
  }
</script>

<svelte:head>
  <title>The Team | Hack4Impact UIUC</title>
  <meta
    name="description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta property="og:url" content="https://h4iuiuc.netlify.app/about/team" />
  <meta property="og:title" content="The Team | Hack4Impact UIUC" />
  <meta
    property="og:description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta name="og:image" content="{team.src}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" value="https://h4iuiuc.netlify.app/about/team" />
  <meta name="twitter:title" value="The Team | Hack4Impact UIUC" />
  <meta
    name="twitter:description"
    value="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta name="twitter:image" content="{team.src}" />
</svelte:head>

<Section>
  <h1 id="title">The Team</h1>
</Section>

<Section id="current" padding="30px">
  <section id="current">
    <h2>Current Members</h2>
    <div class="member-grid">
      {#each active as member}<Member member="{member}" />{/each}
    </div>
  </section>
</Section>

<Section id="alumni" padding="30px">
  <section id="alumni">
    <h2>Alumni</h2>
    <div class="member-grid">
      {#each showAllAlumni ? alumni : alumni.slice(0, 12) as member}
        <Member member="{member}" />
      {/each}
    </div>
    {#if !showAllAlumni && alumni.length > 12}
      <div id="show-all" class="row-center">
        <Button type="secondary" onClick="{toggleAlumni}">Show All</Button>
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

  @media screen and (max-width: 1145px) {
    .member-grid {
      --columns: 3;
    }
  }
  @media screen and (max-width: 875px) {
    .member-grid {
      --columns: 2;
    }
  }

  @media screen and (max-width: 590px) {
    .member-grid {
      --columns: 1;
    }
  }
</style>
