<script context="module" lang="ts">
	import Section from "../../components/Section.svelte";
	import { setImageHeight } from "../../utils/schema";
	import type { Image, Info } from "../../utils/schema";

	export async function preload() {
		const res = await this.fetch("info.json");
		const info: Info = await res.json();

		return { team: info.chapterPicture };
	}
</script>

<script lang="ts">
	export let team: Image;
</script>

<style>
	h1 {
		font-size: 56px;
	}

	h2 {
		font-size: 32px;
	}

	p {
		font-size: 20px;
		opacity: 80%;
	}

	.about-intro {
		padding: 60px 0;
		display: flex;
		flex-direction: row;
	}

	#about-intro-left {
		width: 50%;
		padding-right: 30px;
	}

	#about-intro-right {
		width: 50%;
		padding-left: 30px;
	}

	#team-photo {
		width: 100%;
		border-radius: 4px;
	}
</style>

<svelte:head>
	<title>About Us | Hack4Impact UIUC</title>
</svelte:head>

<Section>
	<div class="about-intro">
		<div id="about-intro-left">
			<h1>About Us</h1>

			<h2>We Believe In Using Tech For Good</h2>
			<p>
				Hack4Impact believes in technology’s huge potential to empower activists
				and humanitarians to create lasting and impactful social change. We work
				to foster the wider adoption of software as a tool for social good.
			</p>

			<h2>Our Mission</h2>
			<p>
				Hack4Impact exists for both nonprofits and students. We connect student
				software developers with nonprofits and other socially responsible
				businesses to develop powerful new tools for social change. This enables
				nonprofits to further their mission and better engage their clients. We
				are committed to increasing awareness of technology's potential for
				good.
			</p>
		</div>
		<div id="about-intro-right">
			<img id="team-photo" src={setImageHeight(team.src, 900)} alt={team.alt} />
		</div>
	</div>
</Section>

<a href="about/work" rel="prefetch">How We Work</a>
<a href="about/team" rel="prefetch">Meet the Team</a>
