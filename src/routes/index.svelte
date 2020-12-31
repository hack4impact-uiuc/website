<script>
	import Button from "../components/Button.svelte";
</script>

<style>
	section {
		margin: 0;
		padding: 0;
	}
	.banner {
		height: 720px;
	}
	#banner-left {
		width: 50%;
		background-color: var(--blue);
		color: #fff;
	}
	#banner-right {
		width: 50%;
		background-color: var(--blue-darker);
	}

	#banner-left-content {
		padding-left: max(calc(100% - calc(var(--content-width) / 2)), 50px);
		padding-right: 20%;
	}

	h1 {
		font-size: 56px;
	}

	p {
		font-family: Open Sans;
		opacity: 80%;
		font-size: 24px;
	}

	.banner-button {
		margin: 0 20px 20px 0;
		display: inline-block;
	}
</style>

<svelte:head>
	<title>Hack4Impact UIUC</title>
	<meta
		name="description"
		content="Uniting students to build well-engineered, user-centric, and impactful products for social change." />
</svelte:head>

<section class="row-center">
	<div id="banner-left" class="banner column-center">
		<div id="banner-left-content">
			<h1>Software For Nonprofits</h1>
			<p>
				We are a team of UIUC students who create robust software for social
				good.
			</p>
			<div id="banner-button-row">
				<div class="banner-button">
					<a class="button-link" href="projects">
						<Button type="primary-white">See Our Work</Button>
					</a>
				</div>
				<div class="banner-button">
					<a class="button-link" href="join">
						<Button type="secondary-white">Work With Us</Button>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div id="banner-right" class="banner" />
</section>
