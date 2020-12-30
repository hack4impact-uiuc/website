<script lang="ts">
	export let segment: string;
</script>

<style>
	nav {
		font-weight: 300;
		padding: 0 1em;
		box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
		position: sticky;
		z-index: 99;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	#logo-link {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	img {
		height: 2em;
	}

	.navlinks {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	h2 {
		font-size: 16px;
		margin: 0;
	}

	[aria-current] {
		background-color: #155da1;
		color: #fff;
	}

	.navlink {
		text-decoration: none;
		padding: 1em 1em;
		display: inline-block;
		position: relative;
		transition: 300ms;
	}

	.navlink:not([aria-current])::before {
		height: 0;
		width: 100%;
		bottom: 0;
		left: 0;
		transition: 300ms;
		content: "";
		position: absolute;
		background-color: #155da1;
	}

	.navlink:not([aria-current]):hover {
		color: #155da1;
		transition: 300ms;
	}

	.navlink:not([aria-current]):hover::before {
		height: 4px;
	}
</style>

<nav>
	<a id="logo-link" rel="prefetch" href="."><img
			src="/logo.svg"
			alt="Hack4Impact logo" /></a>
	<div class="navlinks">
		<a
			class="navlink"
			rel="prefetch"
			aria-current={segment === undefined ? 'page' : undefined}
			href="."><h2>Home</h2></a>
		<a
			class="navlink"
			rel="prefetch"
			aria-current={segment === 'about' ? 'page' : undefined}
			href="about"><h2>About Us</h2></a>
		<a
			class="navlink"
			rel="prefetch"
			aria-current={segment === 'projects' ? 'page' : undefined}
			href="projects"><h2>Projects</h2></a>
		<a
			class="navlink"
			rel="prefetch"
			aria-current={segment === 'join' ? 'page' : undefined}
			href="join"><h2>Work With Us</h2></a>
	</div>
</nav>
