<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section class="flex gap-10">
	<div class="flex flex-col items-center gap-3">
		<div
			class="h-[4rem] w-[3rem] rounded-full bg-white p-1 shadow-lg md:h-[6.5rem] md:w-[6.5rem]"
		></div>
	</div>
</section>
