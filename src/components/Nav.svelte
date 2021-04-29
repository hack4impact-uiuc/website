<script lang="ts">
  export let segment: string;
  let oldSegment: string;

  let showMobileMenu = false;

  $: {
    if (segment !== oldSegment) {
      showMobileMenu = false;
    }
  }
</script>

<nav class="row-center">
  <div class="row-center" id="nav-contents">
    <a class="row-center" sapper:prefetch href="."
      ><img src="/logo.svg" alt="Hack4Impact logo" /></a
    >
    <button
      on:click={() => (showMobileMenu = !showMobileMenu)}
      class="hide-on-desktop">{showMobileMenu ? "×" : "≡"}</button
    >
    <div
      class="row-center"
      class:closedOnMobile={!showMobileMenu}
      id="navlinks"
    >
      <a
        class="navlink"
        sapper:prefetch
        aria-current={segment === undefined ? "page" : undefined}
        href="."><h2>Home</h2></a
      >
      <a
        class="navlink"
        sapper:prefetch
        aria-current={segment && segment.startsWith("about")
          ? "page"
          : undefined}
        href="about"><h2>About Us</h2></a
      >
      <a
        class="navlink"
        sapper:prefetch
        aria-current={segment && segment.startsWith("projects")
          ? "page"
          : undefined}
        href="projects"><h2>Projects</h2></a
      >
      <span
        class="navlink dropdown"
        tabindex="0"
        aria-current={segment && segment.startsWith("join")
          ? "page"
          : undefined}
      >
        <h2>Work With Us <span id="caret">&#9660;</span></h2>
        <div class="dropdown-contents">
          <a
            sapper:prefetch
            aria-current={segment && segment.startsWith("join/nonprofits")
              ? "page"
              : undefined}
            href="join/nonprofits">Non-Profits</a
          >
          <a
            sapper:prefetch
            aria-current={segment && segment.startsWith("join/sponsors")
              ? "page"
              : undefined}
            href="join/sponsors">Sponsors</a
          >
          <a
            sapper:prefetch
            aria-current={segment && segment.startsWith("join/students")
              ? "page"
              : undefined}
            href="join/students">Students</a
          >
        </div>
      </span>
    </div>
  </div>
</nav>

<style>
  nav {
    font-weight: 300;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
    position: sticky;
    top: 0;
    background-color: #fff;
    width: 100%;
    z-index: 999;
  }

  #nav-contents {
    width: 100%;
    max-width: var(--header-width);
    justify-content: space-between;
  }

  img {
    height: 2.5em;
  }

  #navlinks {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 16px;
    margin: 0;
  }

  [aria-current] {
    background-color: var(--blue);
    color: #fff;
  }

  .navlink {
    text-decoration: none;
    padding: 1.5em 1.5em;
    display: inline-block;
    position: relative;
    transition: 0.2s;
  }

  .navlink:not([aria-current])::before {
    height: 4px;
    opacity: 0;
    width: 100%;
    bottom: 0;
    left: 0;
    transition: 0.2s;
    content: "";
    position: absolute;
    background-color: var(--blue);
  }

  .navlink:not([aria-current]):hover {
    color: var(--blue);
    transition: 0.2s;
  }

  .navlink:not([aria-current]):hover::before {
    opacity: 100%;
    transition: 0.2s;
  }

  .hide-on-desktop {
    display: none;
  }

  .dropdown > h2 {
    user-select: none;
  }

  .dropdown .dropdown-contents {
    visibility: hidden;
    position: absolute;
    width: 100%;
    background-color: #fff;
    top: 4em;
    z-index: -1;
    left: 0;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
  }

  .dropdown:focus .dropdown-contents,
  .dropdown:focus-within .dropdown-contents,
  .dropdown:hover .dropdown-contents {
    visibility: visible;
  }

  .dropdown-contents a {
    display: block;
    text-align: center;
    padding: 1em 0;
    text-decoration: none;
    transition: color 0.2s;
    color: var(--text-dark);
  }

  .dropdown-contents a:hover {
    color: var(--blue);
  }

  #caret {
    display: inline-block;
    transform: scaleY(0.6);
    margin-left: 0.15em;
  }

  button.hide-on-desktop {
    background: none;
    border: none;
    font-size: 24px;
    transform: scaleX(1.1);
  }

  @media only screen and (max-width: 792px) {
    /* utility */

    .hide-on-desktop {
      display: block;
    }

    .closedOnMobile {
      display: none;
    }

    /* modified */

    nav {
      height: 4em;
    }
    #navlinks {
      position: fixed;
      flex-direction: column;
      align-items: stretch;
      top: 4em;
      background-color: white;
      width: 100%;
      left: 0;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
    }

    .navlink {
      display: block;
    }

    .navlink:not([aria-current])::before {
      opacity: 100%;
      height: 1px;
      background-color: var(--gray-lighter);
    }

    .dropdown .dropdown-contents {
      visibility: visible;
    }

    .dropdown-contents a {
      text-align: left;
      padding: 1.5em 1.5em;
    }

    #caret {
      display: none;
    }
  }
</style>
