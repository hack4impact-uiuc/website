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

	img {
		height: 2em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: "";
		display: block;
		clear: both;
	}

	h2 {
		font-size: 16px;
		margin: 0;
	}

	li {
		display: block;
		float: left;
		text-align: center;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		color: #155da1;
	}

	[aria-current]::after {
		position: absolute;
		content: "";
		width: calc(100% - 1em);
		height: 2px;
		background-color: #155da1;
		display: block;
		bottom: 0px;
		left: 0.5em;
	}

	a {
		text-decoration: none;
		padding: 1em 1em;
		display: block;
	}
</style>

<nav>
	<img src="/logo.svg" alt="Hack4Impact logo" />
	<ul>
		<li>
			<a
				rel="prefetch"
				aria-current={segment === undefined ? 'page' : undefined}
				href="."><h2>Home</h2></a>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={segment === 'about' ? 'page' : undefined}
				href="about"><h2>About Us</h2></a>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={segment === 'projects' ? 'page' : undefined}
				href="projects"><h2>Projects</h2></a>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={segment === 'join' ? 'page' : undefined}
				href="join"><h2>Work With Us</h2></a>
		</li>
	</ul>
</nav>
