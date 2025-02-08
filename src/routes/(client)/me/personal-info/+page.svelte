<script lang="ts">
	import { getAvatarFallbackText } from '$lib/utils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section class="flex gap-10">
	<div class="flex flex-col items-center gap-3">
		<div class="h-[4rem] w-[3rem] rounded-full bg-white p-1 shadow-lg md:h-[6.5rem] md:w-[6.5rem]">
			<div class="relative flex h-full items-center justify-center rounded-full bg-[#fae9c7]">
				<p class="text-2xl font-medium capitalize text-[#b6b5b1] lg:text-4xl">
					{getAvatarFallbackText('John Doe')}
				</p>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-3">
		<h1 class="text-lg font-semibold capitalize md:text-2xl">John Doe</h1>
		<div class="flex flex-col">
			<h2 class="text-sm font-semibold md:text-base">Email</h2>
			<p class="text-sm font-normal md:text-base">johndoe@gmail.com</p>
		</div>
	</div>
</section>
