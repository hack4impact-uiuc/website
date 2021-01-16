<script context="module" lang="ts">
  import Section from "../../components/Section.svelte";
  import type { Member } from "../../utils/schema";

  export async function preload() {
    const res = await this.fetch(`server/members.json`);

    const members: Member[] = await res.json();

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
  export let active: Member[];
  export let alumni: Member[];
</script>

<svelte:head>
  <title>The Team | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="40px">
  <h1>The Team</h1>
  <h2>Current Members</h2>
  {#each active as member}<p>{member.name}</p>{/each}
  <h2>Alumni</h2>
  {#each alumni as member}<p>{member.name}</p>{/each}
</Section>
