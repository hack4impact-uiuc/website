<script lang="ts">
	import Nav from "../components/Nav.svelte";

	export let segment: string;
</script>

<Nav {segment} />

<main>
	<slot />
</main>
