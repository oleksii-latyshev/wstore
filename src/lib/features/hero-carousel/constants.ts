import type { CarouselSlide } from '$lib/features/hero-carousel/types';

export const CAROUSEL_SLIDES: CarouselSlide[] = [
	{
		title: 'Welcome to Skateboarder',
		image: '/hero/andrew-konstantinov-VtzqmX2pLV8-unsplash.jpg',
		author: 'Photo by Andrew Konstantinov on Unsplash',
		link: 'https://unsplash.com/photos/person-holding-skateboard-VtzqmX2pLV8?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash'
	},
	{
		title: 'Skateboarder in the city',
		image: '/hero/shawn-henry-eK_aInAXydw-unsplash.jpg',
		author: 'Photo by shawn henry on Unsplash',
		link: 'https://unsplash.com/photos/person-doing-kick-flip-trick-eK_aInAXydw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash'
	},
	{
		title: '',
		image: '/hero/lukas-bato-Vbbn4xNBfnM-unsplash.jpg',
		author: 'Photo by Lukas Bato on Unsplash',
		link: 'https://unsplash.com/photos/brown-wooden-skateboard-Vbbn4xNBfnM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash'
	}
] as const;
