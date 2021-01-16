<script context="module" lang="ts">
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
</script>

<svelte:head>
  <title>The Team | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="40px">
  <h1>The Team</h1>
  <section id="current">
    <h2>Current Members</h2>
    <div class="flex-wrap">
      {#each active as member}<Member {member} />{/each}
    </div>
  </section>

  <section id="alumni">
    <h2>Alumni</h2>
    <div class="flex-wrap">
      {#each alumni as member}<Member {member} />{/each}
    </div>
  </section>
</Section>
