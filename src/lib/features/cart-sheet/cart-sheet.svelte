<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { cartSheetState } from '$lib/features/cart-sheet/states';
</script>

<Sheet.Root bind:open={cartSheetState.isOpen}>
	<Sheet.Trigger>Open</Sheet.Trigger>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>Cart</Sheet.Title>
			<Sheet.Description>Review your cart and checkout</Sheet.Description>
		</Sheet.Header>
		<p class="my-5 capitalize md:my-0">Total: $500</p>
		<Sheet.Footer>
			<Button>Checkout</Button>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
