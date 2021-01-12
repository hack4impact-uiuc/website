<script context="module" lang="ts">
	import Button from "../components/Button.svelte";
	import DoubleBanner from "../components/DoubleBanner.svelte";
	import ProjectCard from "../components/projects/ProjectCard.svelte";
	import Section from "../components/Section.svelte";
	import type { Project } from "../utils/schema";

	export async function preload() {
		const res = await this.fetch("featured.json");

		const projects: Project[] = (await res.json()).slice(0, 4);

		return { projects };
	}
</script>

<script lang="ts">
	export let projects: Project[];
</script>

<style>
	a {
		text-decoration: none;
	}
	#banner-title {
		font-size: 56px;
	}

	#banner-mission {
		opacity: 80%;
		font-size: 24px;
	}

	.banner-button {
		margin: 0 20px 20px 0;
		display: inline-block;
	}

	#featured-section h1,
	#featured-section h2 {
		font-size: 32px;
		margin-bottom: 20px;
	}

	#featured-section h4,
	#featured-section a {
		font-size: 20px;
		opacity: 80%;
	}

	.featured-project {
		color: #fff;
		padding: 20px;
		margin-bottom: 20px;
	}

	.featured-project > span::after {
		content: "\2192";
		padding-left: 0.5em;
		transition: padding var(--animation);
	}

	.featured-project:hover > span::after {
		padding-left: 0.8em;
	}
</style>

<svelte:head>
	<title>Hack4Impact UIUC</title>
	<meta
		name="description"
		content="Uniting students to build well-engineered and impactful products for social change." />
</svelte:head>

<DoubleBanner leftColor="var(--blue)" rightColor="var(--blue-darker)">
	<h1 id="banner-title">Software For Nonprofits</h1>
	<p id="banner-mission">
		Uniting students to build well-engineered and impactful products for social
		change.
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
</DoubleBanner>
<Section id="featured-projects" padding="30px">
	<div id="featured-section">
		<h1>Featured Work</h1>
		<a href="projects/{projects[0].slug}" rel="prefetch">
			<div
				class="featured-project"
				style="background-color: {projects[0].accentColor}">
				<h4>{projects[0].name}</h4>
				<h2>{projects[0].summary}</h2>
				<span>Learn More</span>
			</div>
		</a>
		<div class="row-center">
			{#each projects.slice(1) as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</Section>
