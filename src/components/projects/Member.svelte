<script lang="ts">
  import type { Member } from "../../utils/schema";

  export let member: Member;
  export let role: string;
</script>

<div class="member column-center">
  <img src="{member.picture.src}?h=300" alt="{member.picture.alt}" />
  <span>{member.name}</span>
  <i>{role}</i>
</div>

<style>
  i {
    text-align: center;
  }

  .member {
    color: #fff;
    padding: 10%;
  }

  img {
    border-radius: 100%;
    margin-bottom: 10px;
    width: 100%;
  }
</style>
