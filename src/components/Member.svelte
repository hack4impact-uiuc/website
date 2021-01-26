<script lang="ts">
  import type { Member } from "../utils/schema";

  export let member: Member;
</script>

<div class="member row-center">
  <img
    src="{member.picture.src}?h=160"
    alt={member.picture.alt}
    height="80"
    width="80"
  />
  <div class="member-info">
    <h4>{member.name}</h4>
    {member.role}
  </div>
</div>

<style>
  img {
    border-radius: 100%;
    margin-right: 5%;
  }

  .member {
    margin: 20px 0;
    justify-content: left;
  }
</style>
