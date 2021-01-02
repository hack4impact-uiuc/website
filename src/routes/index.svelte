<script context="module" lang="ts">
	import type { Project } from "../utils/schema";

	export async function preload() {
		const res = await this.fetch("featured.json");

		const projects: Project[] = await res.json();

		return { projects };
	}
</script>

<script lang="ts">
	import Banner from "../components/home/Banner.svelte";
	import Featured from "../components/home/Featured.svelte";

	export let projects: Project[];
</script>

<svelte:head>
	<title>Hack4Impact UIUC</title>
	<meta
		name="description"
		content="Uniting students to build well-engineered, user-centric, and impactful products for social change." />
</svelte:head>
<Banner />
<Featured {projects} />
