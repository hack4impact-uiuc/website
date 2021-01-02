<script context="module" lang="ts">
	import type { Project } from "../utils/schema";

	export async function preload() {
		const res = await this.fetch("featured.json");

		const projects: Project[] = await res.json();

		return { projects };
	}
</script>

<script lang="ts">
	import Button from "../components/Button.svelte";
	import Section from "../components/Section.svelte";

	export let projects: Project[];

	function shuffle(array: any[]): void {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	$: shuffle(projects);
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

	.featured-project {
		color: #fff;
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
<Section id="featured-projects">
	<div
		class="featured-project"
		style="background-color: {projects[0].accentColor}">
		<h2>{projects[0].name}</h2>
		<p>{projects[0].summary}</p>
	</div>
	<div style="background-color: #ccc">
		{#each projects.slice(1) as project}
			<h2>{project.name}</h2>
		{/each}
	</div>
</Section>
