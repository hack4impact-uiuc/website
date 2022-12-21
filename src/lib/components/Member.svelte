<script lang="ts">
  import { setImageHeight, type Member } from "$lib/utils/schema";

  export let member: Member;
</script>

<div class="member row-center">
  <img
    src={setImageHeight(member.picture.src, 160)}
    alt={member.picture.alt}
    height="96"
    width="96"
  />
  <div class="member-info">
    <h4>{member.name}</h4>
    {member.role}
  </div>
</div>

<style>
  img {
    border-radius: 100%;
    max-width: 30%;
    height: auto;
    margin-right: 5%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  h4 {
    margin-bottom: 0;
  }

  .member {
    justify-content: left;
  }

  @media screen and (max-width: 590px) {
    .member.row-center {
      flex-direction: column;
      text-align: center;
    }

    .member.row-center img {
      max-width: 66%;
      margin-bottom: 0.5em;
    }
  }
</style>
