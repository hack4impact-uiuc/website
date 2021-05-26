<script lang="ts">
  import type { Project } from "../../utils/schema";

  export let project: Project;
  export let imageSrc: string;
</script>

<a href="projects/{project.slug}" sapper:prefetch>
  <div class="featured-project" style="background-color: {project.accentColor}">
    {#if imageSrc !== undefined}
      <figure>
        <img src={imageSrc} alt={project.name} />
      </figure>
    {/if}
    <div class="meta" class:masked={imageSrc !== undefined}>
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
    top: 0;
    height: 100%;
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
  }

  @media only screen and (max-width: 1350px) {
    .meta {
      padding-right: 1rem;
    }

    .meta.masked {
      background: rgba(0, 0, 0, 0.3);
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
