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
      <div class="vercel-banner">
        <a
          href="https://vercel.com/?utm_source=hack4impact1&utm_campaign=oss"
          target="_blank"
        >
          Powered by <svg
            width="71"
            height="16"
            viewBox="0 0 71 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.58 4C32.82 4 30.8299 5.8 30.8299 8.5C30.8299 11.2 33.0675 13 35.8301 13C37.4974 13 38.9675 12.34 39.8774 11.2275L37.965 10.1225C37.46 10.675 36.6925 10.9975 35.8301 10.9975C34.6325 10.9975 33.615 10.3725 33.2374 9.3725H40.2426C40.2974 9.0925 40.3301 8.8025 40.3301 8.4975C40.3301 5.8 38.3426 4 35.58 4ZM33.2174 7.62499C33.5299 6.6275 34.385 6 35.58 6C36.7774 6 37.6325 6.6275 37.9426 7.62499H33.2174ZM32.6525 1.25L25.725 13.25L18.795 1.25H21.3925L25.7226 8.75L30.0525 1.25H32.6525ZM9.23751 0L18.475 16H0L9.23751 0ZM50.38 8.5C50.38 10 51.36 11 52.88 11C53.9101 11 54.6826 10.5325 55.08 9.77L57 10.8775C56.205 12.2025 54.715 13 52.88 13C50.1174 13 48.1301 11.2 48.1301 8.5C48.1301 5.8 50.12 4 52.88 4C54.715 4 56.2026 4.7975 57 6.1225L55.08 7.23C54.6826 6.4675 53.9101 6 52.88 6C51.3626 6 50.38 7 50.38 8.5ZM71 1.25V12.75H68.7501V1.25H71ZM62.5 4C59.74 4 57.7501 5.8 57.7501 8.5C57.7501 11.2 59.9901 13 62.7501 13C64.4174 13 65.8875 12.34 66.7974 11.2275L64.885 10.1225C64.38 10.675 63.6125 10.9975 62.7501 10.9975C61.5525 10.9975 60.5351 10.3725 60.1575 9.3725H67.1626C67.2175 9.0925 67.2499 8.8025 67.2499 8.4975C67.2499 5.8 65.2626 4 62.5 4ZM60.1375 7.62499C60.4501 6.6275 61.3026 6 62.5 6C63.6975 6 64.5525 6.6275 64.8626 7.62499H60.1375ZM47.38 4.25V6.6725C47.1301 6.6 46.865 6.55 46.58 6.55C45.1275 6.55 44.08 7.55 44.08 9.05V12.75H41.8301V4.25H44.08V6.55C44.08 5.28 45.5574 4.25 47.38 4.25Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
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

  #logo-container img {
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

  .vercel-banner a {
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    margin-top: 20px;
    padding: 10px 15px;
    background: var(--blue);
    border-radius: 4px;
    font-family: Chivo;
    color: white;
    opacity: 0.8;
  }

  .vercel-banner a:hover {
    text-decoration: none;
    opacity: 1;
  }

  .vercel-banner svg {
    margin-left: 0.35rem;
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
