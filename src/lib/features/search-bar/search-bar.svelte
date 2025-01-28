<script lang="ts">
	import { SearchIcon } from 'lucide-svelte';
</script>

<form
	class="flex w-full items-center justify-between rounded-3xl bg-muted px-3.5 focus-within:ring-2 focus-within:ring-primary"
>
	<input
		type="text"
		placeholder="New skate.."
		class="h-11 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
	/>
	<SearchIcon class="text-muted-foreground" />
</form>
