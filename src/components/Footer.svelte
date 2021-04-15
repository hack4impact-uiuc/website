<script lang="ts">
  export let semesters: string[];
</script>

<footer class="row-center">
  <div id="footer-contents">
    <div id="inquiries">
      <div id="logo-container">
        <a rel="prefetch" href="."
          ><img src="/logo.svg" alt="Hack4Impact logo" /></a
        >
      </div>

      For all inquiries of partnership or sponsorship, please contact us at
      <a class="blue-text" href="mailto:uiuc@hack4impact.org"
        >uiuc@hack4impact.org</a
      >
    </div>
    <div class="links">
      <div class="link-section">
        <span class="blue-text link-section-header">Connect With Us</span>
        <a href="https://www.facebook.com/h4iuiuc">Facebook</a>
        <a href="https://github.com/hack4impact-uiuc">GitHub</a>

        <a href="https://www.instagram.com/hack4impactuiuc/">Instagram</a>
      </div>
      <div class="link-section">
        <a class="blue-text link-section-header" href="/about">About Us</a>
        <a href="/about/work" sapper:prefetch>How We Work</a>
        <a href="/about/team" sapper:prefetch>Meet The Team</a>
      </div>
      <div class="link-section">
        <a
          class="blue-text link-section-header"
          href="/projects"
          sapper:prefetch>Projects</a
        >
        {#each semesters.slice(0, 3) as semester}<a
            href="/projects#{semester}"
            sapper:noscroll
            sapper:prefetch>{semester}</a
          >{/each}
      </div>
      <div class="link-section">
        <a class="blue-text link-section-header" href="/join">Work With Us</a>
        <a href="/join/nonprofits" sapper:prefetch>Nonprofits</a>
        <a href="/join/students" sapper:prefetch>Students</a>
        <a href="/join/sponsors" sapper:prefetch>Students</a>
      </div>
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
    width: 360px;
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
  }

  .link-section {
    display: flex;
    flex-direction: column;
    width: 160px;
  }

  .link-section a {
    margin-top: 10px;
  }

  .link-section-header {
    font-family: Chivo;
  }
</style>
