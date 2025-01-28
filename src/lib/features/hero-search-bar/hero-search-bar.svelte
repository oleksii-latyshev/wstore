<script lang="ts">
	import { SearchIcon } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<form
	class="absolute bottom-3 left-5 flex w-full max-w-xs items-center rounded-md bg-white px-1 text-foreground focus-within:ring focus-within:ring-primary sm:max-w-md md:left-10 md:gap-2 md:px-3"
>
	<SearchIcon />
	<input type="text" class="h-12 flex-1 outline-none md:h-16" />
	<Button>Search</Button>
</form>
