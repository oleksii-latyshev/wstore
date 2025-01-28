<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import HeroCarousel from '$lib/features/hero-carousel/hero-carousel.svelte';
</script>

<div class="mx-auto mt-2 max-w-7xl px-2 md:mt-5 md:px-5">
	<HeroCarousel />

	<section class="mt-20">
		<h2 class="text-2xl font-bold md:text-4xl">What we have for you</h2>
		<p class="mt-2 text-sm text-muted-foreground md:mt-3 md:text-base">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas error atque, tempore
			dolorum iste officiis doloribus asperiores impedit qui minima totam sequi nisi, perferendis
			sed incidunt odit. Architecto, dicta.
		</p>
		<Button href="/search" class="my-4 md:my-7">Explore product</Button>
	</section>
</div>
