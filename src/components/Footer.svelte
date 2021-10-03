<script lang="ts">
  import { semesterToId } from "$lib/utils/schema";

  export let semesters: string[];
</script>

<footer class="row-center">
  <div id="footer-contents">
    <div id="inquiries">
      <div id="logo-container">
        <a sveltekit:prefetch href="/">
          <img src="/logo.svg" alt="Hack4Impact logo" />
        </a>
      </div>

      For all inquiries of partnership or sponsorship, please contact us at
      <a class="blue-text" href="mailto:uiuc@hack4impact.org">
        uiuc@hack4impact.org
      </a>
    </div>
    <div class="links">
      <span>
        <ul>
          <li class="blue-text link-section-header">Connect With Us</li>
          <li>
            <a href="https://www.facebook.com/h4iuiuc" rel="external">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://github.com/hack4impact-uiuc" rel="external">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hack4impactuiuc/" rel="external">
              Instagram
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              class="blue-text link-section-header"
              href="/about"
              sveltekit:prefetch
            >
              About Us
            </a>
          </li>
          <li><a href="/about/work" sveltekit:prefetch>How We Work</a></li>
          <li><a href="/about/team" sveltekit:prefetch>Meet The Team</a></li>
        </ul>
      </span>
      <span>
        <ul>
          <li>
            <a
              class="blue-text link-section-header"
              href="/projects"
              sveltekit:prefetch>Projects</a
            >
          </li>
          {#each semesters.slice(0, 3) as semester}
            <li>
              <a href="/projects#{semesterToId(semester)}" sveltekit:prefetch>
                {semester}
              </a>
            </li>
          {/each}
        </ul>
        <ul>
          <li>
            <span class="blue-text link-section-header">Work With Us</span>
          </li>
          <li><a href="/join/nonprofits" sveltekit:prefetch>Nonprofits</a></li>
          <li><a href="/join/sponsors" sveltekit:prefetch>Sponsors</a></li>
          <li><a href="/join/students" sveltekit:prefetch>Students</a></li>
        </ul>
      </span>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--gray-lighter);
    padding: 100px 0;
    color: #666b72;
  }

  #footer-contents {
    width: 100%;
    max-width: var(--content-width);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #inquiries {
    max-width: 360px;
    width: 100%;
  }

  #logo-container {
    width: 100%;
  }

  img {
    height: 2.5em;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .blue-text {
    color: var(--blue);
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-evenly;
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 50%;
    list-style-type: none;
  }

  .links > span {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  li {
    margin-bottom: 10px;
  }

  .link-section-header {
    font-family: Chivo;
  }

  @media (max-width: 1005px) {
    #footer-contents {
      flex-direction: column;
    }

    .links {
      padding-top: 1.5em;
      flex-direction: column;
    }

    .links ul:nth-child(2n + 1) {
      padding-left: 0;
    }
  }

  @media (max-width: 270px) {
    .links > span {
      flex-direction: column;
    }

    .links ul {
      padding-left: 0;
    }
  }
</style>
