<script lang="ts">
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { TrashIcon } from 'lucide-svelte';
	import AddNewAddressModal from '$lib/features/add-new-address-modal/add-new-address-modal.svelte';
	import { addNewAddressModalState } from '$lib/features/add-new-address-modal/states';

	let { data }: { data: PageData } = $props();

	function openAddNewAddressModal() {
		addNewAddressModalState.open();
	}

	let addresses = false;
</script>

{#if addresses}
	<div>
		<div class="mb-2 ml-auto w-fit px-3">
			<Button onclick={openAddNewAddressModal}>Add new address</Button>
		</div>

		<div class="mb-3 grid gap-5 lg:grid-cols-2">
			<Card.Root>
				<Card.Header>
					<Card.Title>Home address</Card.Title>
				</Card.Header>
				<Card.Content>
					<div>
						<p>some address, 21</p>
						<p>Country</p>
						<p>City</p>
					</div>

					<div class="mt-auto w-[150px] space-y-2">
						<Badge variant="secondary">Shipping Address</Badge>
						<Badge variant="secondary">Billing Address</Badge>
					</div>
				</Card.Content>
				<Card.Footer class="-pb-2 t-1 gap-5 text-sm">
					<Button variant="destructive">
						<TrashIcon class="mr-2" />
						<p>Remove</p>
					</Button>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
{:else}
	<div class="flex h-[50vh] w-full flex-col items-center justify-center gap-3 text-center">
		<h1 class="text-3xl font-semibold">You haven't saved any address yet</h1>
		<p class="text-muted-foreground">Add a new address easily below</p>
		<Button onclick={openAddNewAddressModal}>Add new address</Button>
	</div>
{/if}

<AddNewAddressModal />
