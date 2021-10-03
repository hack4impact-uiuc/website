<script lang="ts">
  import { setImageHeight } from "$lib/utils/schema";
  import type { Project } from "$lib/utils/schema";

  export let project: Project;
</script>

<a href="/projects/{project.slug}" sveltekit:prefetch>
  <div class="featured-project" style="background-color: {project.accentColor}">
    {#if project.headerImage !== undefined}
      <figure>
        <img
          src="{setImageHeight(project.headerImage.src, 600)}"
          alt="{project.name}"
        />
      </figure>
    {/if}
    <div class="meta" class:masked="{project.headerImage !== undefined}">
      <h4>{project.name}</h4>
      <h2>{project.summary}</h2>
      <span>Learn More</span>
    </div>
  </div>
</a>

<style>
  h2 {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }

  h4,
  a {
    opacity: 80%;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    position: relative;
  }

  .meta {
    position: absolute;
    top: 0;
    height: 13rem;
    left: 0;
    padding: 2rem 25% 2rem 1rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .meta > * {
    z-index: 2;
  }

  figure {
    margin: 0;
    padding: 0;
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 90%;
    max-width: 25%;
  }

  figure img {
    height: 100%;
    user-select: none;
  }

  .featured-project {
    color: #fff;
    padding: 2rem 1rem;
    margin: 1rem 0;
    position: relative;
    height: 13rem;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
  }

  @media only screen and (min-width: 1500px) {
    h2 {
      font-size: calc(0.9 * 1.6rem);
    }
  }

  @media only screen and (max-width: 1350px) {
    .meta {
      padding-right: 1rem;
    }

    .meta.masked {
      background: rgba(0, 0, 0, 0.3);
    }

    figure {
      max-width: 100%;
      filter: blur(4px);
    }
  }

  @media only screen and (max-width: 1105px) {
    .meta,
    .featured-project {
      height: 14rem;
    }
  }

  @media only screen and (max-width: 700px) {
    .meta,
    .featured-project {
      height: 16rem;
    }
  }
  @media only screen and (max-width: 510px) {
    .meta,
    .featured-project {
      height: 18rem;
    }
  }

  @media only screen and (max-width: 375px) {
    .meta,
    .featured-project {
      height: 24rem;
    }
  }

  .featured-project > div {
    z-index: 1;
  }

  .featured-project > .meta > span::after {
    content: "\2192";
    padding-left: 0.5em;
    transition: padding var(--animation);
  }

  .featured-project:hover > .meta > span::after {
    padding-left: 0.8em;
  }
</style>
