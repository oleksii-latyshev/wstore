<script>
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
</script>

<div>
	<button class="mt-5 text-lg font-semibold capitalize">Electronics</button>

	<div class="mt-7 space-y-5 pl-5">
		<div class="flex items-center space-x-4">
			<Checkbox aria-labelledby="terms-label" />
			<Label class="cursor-pointer text-sm font-medium" id="terms-label">Smartphones</Label>
		</div>
	</div>
</div>
