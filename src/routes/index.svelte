<script>
	import Button from "../components/Button.svelte";
</script>

<style>
	figure {
		margin: 0;
		padding: 0;
	}
	.banner {
		height: 80vh;
	}
	#banner-left {
		width: 50%;
		background-color: #155da1;
		color: #fff;
	}
	#banner-right {
		width: 50%;
		background-color: #24426e;
	}

	#banner-left-content {
		padding: 15%;
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

<figure class="row-center">
	<div id="banner-left" class="banner column-center">
		<div id="banner-left-content">
			<h1>Software For Nonprofits</h1>
			<p>
				We are a team of UIUC students who create robust software for social
				good.
			</p>
			<div id="banner-button-row">
				<div class="banner-button">
					<Button type="primary-white">
						<a href="projects">See Our Work</a>
					</Button>
				</div>
				<div class="banner-button">
					<Button type="secondary-white">
						<a href="join">Work With Us</a>
					</Button>
				</div>
			</div>
		</div>
	</div>
	<div id="banner-right" class="banner" />
</figure>
