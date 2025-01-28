<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import { CAROUSEL_SLIDES } from '$lib/features/hero-carousel/constants';
	import HeroSearchBar from '$lib/features/hero-search-bar/hero-search-bar.svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import Fade from 'embla-carousel-fade';
</script>

<Carousel.Root
	opts={{ containScroll: false }}
	plugins={[
		Fade(),
		Autoplay({
			stopOnInteraction: false,
			stopOnMouseEnter: true
		})
	]}
	class="relative w-full max-w-full"
>
	<Carousel.Content class="-ml-1">
		{#each CAROUSEL_SLIDES as { image, author, link, title }, index (image)}
			<Carousel.Item>
				<div
					class="relative mx-auto h-[350px] overflow-clip rounded-lg bg-cover bg-no-repeat p-1 text-white md:h-[480px]"
					style:background-image="url({image})"
				>
					<div class="absolute inset-0 bg-gradient-to-br from-black/20 to-black/80"></div>
					<div class="ms:px-10 absolute bottom-0 right-0 z-10 mb-14 px-5 md:mb-20">
						<h3 class="mb-1 text-2xl font-bold md:mb-3 md:text-6xl">{title}</h3>
						<a href={link} class="mb-2 text-sm md:mb-5 md:text-lg">
							{author}
						</a>
					</div>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<HeroSearchBar />
</Carousel.Root>
