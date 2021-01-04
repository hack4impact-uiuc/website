<script lang="ts">
	export let segment: string;
</script>

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
</style>

<nav class="row-center">
	<div class="row-center" id="nav-contents">
		<a class="row-center" rel="prefetch" href="."><img
				src="/logo.svg"
				alt="Hack4Impact logo" /></a>
		<div class="row-center" id="navlinks">
			<a
				class="navlink"
				rel="prefetch"
				aria-current={segment === undefined ? 'page' : undefined}
				href="."><h2>Home</h2></a>
			<a
				class="navlink"
				rel="prefetch"
				aria-current={segment && segment.startsWith('about') ? 'page' : undefined}
				href="about"><h2>About Us</h2></a>
			<a
				class="navlink"
				rel="prefetch"
				aria-current={segment && segment.startsWith('projects') ? 'page' : undefined}
				href="projects"><h2>Projects</h2></a>
			<a
				class="navlink"
				rel="prefetch"
				aria-current={segment && segment.startsWith('join') ? 'page' : undefined}
				href="join"><h2>Work With Us</h2></a>
		</div>
	</div>
</nav>
