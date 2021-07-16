<script lang="ts">
  export let path: string | undefined;
  // let oldSegment: string;

  let showMobileMenu = false;

  // $: {
  //   if (segment !== oldSegment || (path && !path.startsWith(segment))) {
  //     showMobileMenu = false;
  //   }
  // }

  const dropdownRoutes = ["Nonprofits", "Sponsors", "Students"];
  let windowWidth: number | undefined;
</script>

<svelte:window bind:innerWidth="{windowWidth}" />

<nav class="row-center">
  <div class="row-center" id="nav-contents">
    <a class="row-center" sveltekit:prefetch href="."
      ><img src="/logo.svg" alt="Hack4Impact logo" /></a
    >
    <button
      on:click="{() => (showMobileMenu = !showMobileMenu)}"
      class="hide-on-desktop">{showMobileMenu ? "×" : "≡"}</button
    >
    <div
      class="row-center"
      class:closedOnMobile="{!showMobileMenu}"
      id="navlinks"
    >
      <a
        class="navlink"
        sveltekit:prefetch
        aria-current="{path === '/' ? 'page' : undefined}"
        href="."><h2>Home</h2></a
      >
      <a
        class="navlink"
        sveltekit:prefetch
        aria-current="{path && path.startsWith('/about') ? 'page' : undefined}"
        href="/about"><h2>About Us</h2></a
      >
      <a
        class="navlink"
        sveltekit:prefetch
        aria-current="{path && path.startsWith('/projects')
          ? 'page'
          : undefined}"
        href="/projects"><h2>Projects</h2></a
      >
      <span
        class="navlink dropdown"
        tabindex="{windowWidth > 792 ? 0 : -1}"
        aria-current="{path && path.startsWith('/join') ? 'page' : undefined}"
      >
        <h2>Work With Us<span id="caret"> &#9660;</span></h2>
        <div class="dropdown-contents">
          {#each dropdownRoutes as route}
            <a
              sveltekit:prefetch
              on:click="{() => (showMobileMenu = false)}"
              aria-current="{path &&
              path.includes(`join/${route.toLowerCase()}`)
                ? 'page'
                : undefined}"
              href="{`/join/${route.toLowerCase()}`}">{route}</a
            >
          {/each}
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
    top: 3.9em;
    z-index: -1;
    left: 0;
    padding-top: 6px;
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

  .dropdown-contents a:not([aria-current]):hover {
    color: var(--blue);
  }

  .dropdown-contents a[aria-current] {
    color: #fff;
  }

  #caret {
    display: inline-block;
    transform: scaleY(0.6);
    margin-left: 0.15em;
  }

  button.hide-on-desktop {
    background: none;
    border: none;
    transform: scaleX(1.1);
    color: var(--gray-light);
    font-size: 24px;
    transform: scaleX(1.1) scale(1.3);
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
      height: 70px;
    }
    #navlinks {
      position: fixed;
      flex-direction: column;
      align-items: stretch;
      top: 70px;
      background-color: white;
      width: 100%;
      left: 0;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
    }

    .navlink {
      display: block;
    }

    .navlink:last-child {
      padding: 0;
    }

    .navlink:last-child > h2 {
      padding: 1em 1.12em 0.25em;
    }

    .navlink:not([aria-current])::before,
    .dropdown-contents a::before {
      opacity: 100%;
      height: 1px;
      background-color: var(--gray-lighter);
    }

    .dropdown-contents a::before {
      width: 100vw;
      bottom: 0;
      left: -1em;
      transition: 0.2s;
      content: "";
      position: absolute;
    }

    .dropdown .dropdown-contents {
      visibility: visible;
      position: relative;
      box-shadow: none;
      z-index: 6;
      top: 0;
    }

    .dropdown {
      padding-bottom: 0;
    }

    [aria-current].dropdown {
      background-color: #fff;
      color: var(--gray);
    }

    .dropdown-contents a {
      text-align: left;
      padding: 1em;
      font-size: 16px;
      position: relative;
    }

    .navlink.dropdown > h2,
    .navlink.dropdown > h2:focus,
    .navlink.dropdown > h2:hover {
      color: var(--gray-light);
      font-weight: 300;
    }

    #caret {
      display: none;
    }
  }
</style>
