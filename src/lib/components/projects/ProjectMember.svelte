<script lang="ts">
  import { setImageHeight, type Member } from "$lib/utils/schema";

  export let member: Member;
  export let role: string;
</script>

<div class="member column-center">
  <img src={setImageHeight(member.picture.src, 300)} alt={member.picture.alt} />
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
    box-sizing: border-box;
    text-align: center;
  }

  img {
    border-radius: 100%;
    margin-bottom: 10px;
    width: 100%;
  }
</style>
