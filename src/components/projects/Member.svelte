<script lang="ts">
  import type { Member } from "../../utils/schema";

  export let member: Member;
  export let role: string;
</script>

<div class="member column-center">
  <img
    width="150"
    height="150"
    src="{member.picture.src}?h=300"
    alt={member.picture.alt}
  />
  <span>{member.name}</span>
  <i>{role}</i>
</div>

<style>
  .member {
    color: #fff;
    width: 20%;
    padding: 2.5%;
  }

  img {
    border-radius: 100%;
    margin-bottom: 10px;
  }
</style>
