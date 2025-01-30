<script lang="ts">
	import ProductCard from '$lib/features/product-card/product-card.svelte';
	import ProductFilters from '$lib/features/product-filters/product-filters.svelte';
	import SearchBar from '$lib/features/search-bar/search-bar.svelte';

	let { data } = $props();
	let isProducts = true;
</script>

<div class="mx-auto my-5 max-w-6xl md:my-20 lg:px-10">
	<h1 class="text-xl font-bold capitalize md:text-3xl">Search for Something</h1>

	<div class="my-5 flex items-center justify-between">
		<SearchBar />
	</div>

	<section class="flex w-full flex-col justify-between gap-6 lg:flex-row">
		{#if isProducts}
			<div class="relative hidden basis-[200px] lg:inline-flex">
				<div class="sticky left-0 top-[5rem] flex flex-col gap-5">
					<h3 class="text-xl font-bold md:text-2xl">Filters</h3>
					<ProductFilters />
				</div>
			</div>
			<div class="flex flex-1 flex-col gap-5">
				<div class="space-y-3 md:space-y-5">
					<h2 class="text-2xl font-bold md:text-4xl">What we have for you</h2>
					<div class="grid grid-cols-1 gap-4">
						{#each Array.from({ length: 5 }) as _, index (index)}
							<ProductCard />
						{/each}
					</div>
				</div>
			</div>
		{:else}
			<div class="grid h-[400px] w-full place-content-center place-items-center">
				<p class="text-center text-lg font-medium text-muted-foreground">No products found</p>
			</div>
		{/if}
	</section>
</div>
