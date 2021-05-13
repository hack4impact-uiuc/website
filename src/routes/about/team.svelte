<script context="module" lang="ts">
  import Button from "../../components/Button.svelte";
  import Member from "../../components/Member.svelte";
  import Section from "../../components/Section.svelte";
  import type { Member as MemberType } from "../../utils/schema";

  export async function preload() {
    const res = await this.fetch(`server/members.json`);

    const members: MemberType[] = await res.json();

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
      active: members.filter((member) => member.active),
      alumni: members.filter((member) => !member.active),
    };
  }
</script>

<script lang="ts">
  export let active: MemberType[];
  export let alumni: MemberType[];

  let showAllAlumni: boolean = false;

  function toggleAlumni(): void {
    showAllAlumni = true;
    console.log("here");
  }
</script>

<svelte:head>
  <title>The Team | Hack4Impact UIUC</title>
</svelte:head>

<Section>
  <h1 id="title">The Team</h1>
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
      {#each showAllAlumni ? alumni : alumni.slice(0, 12) as member}<Member
          {member}
        />{/each}
    </div>
    {#if !showAllAlumni && alumni.length > 12}
      <div id="show-all" class="row-center">
        <Button type="secondary" onClick={toggleAlumni}>Show All</Button>
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
