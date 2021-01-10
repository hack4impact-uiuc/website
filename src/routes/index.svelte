<script context="module" lang="ts">
	import Banner from "../components/home/Banner.svelte";
	import Featured from "../components/home/Featured.svelte";
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

<svelte:head>
	<title>Hack4Impact UIUC</title>
	<meta
		name="description"
		content="Uniting students to build well-engineered and impactful products for social change." />
</svelte:head>
<Banner />
<Featured {projects} />
