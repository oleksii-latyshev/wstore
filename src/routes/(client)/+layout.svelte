<script lang="ts">
	import Header from '$lib/features/header/header.svelte';

	let { children } = $props();
</script>

<Header />

{@render children()}
