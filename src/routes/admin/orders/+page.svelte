<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';
	import { CheckCircleIcon, ClipboardIcon, ClockIcon, TruckIcon } from 'lucide-svelte';

	let showOrders = $state(true);

	let { data } = $props();

	let status = $state('processing');
</script>

<div class="space-y-4 p-8">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-3xl font-bold capitalize tracking-tight">Orders</h2>
		<form class="flex items-center space-x-2">
			<Input class="w-[150px] lg:w-[250px]" placeholder="Search by order code.." />
			<Button type="submit" href="/orders/add">Add user</Button>
		</form>
	</div>
	{#if showOrders}
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">ID</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Customer</Table.Head>
					<Table.Head>Amount + Shipping</Table.Head>
					<Table.Head>Date</Table.Head>
					<Table.Head class="text-right">Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell class="font-medium">
						<div class="flex items-center">
							<span>INV001</span>
							<button onclick={() => navigator.clipboard.writeText('INV001')} class="ml-2">
								<ClipboardIcon class="size-4" />
							</button>
						</div>
					</Table.Cell>
					<Table.Cell>
						<div class="flex items-center">
							{#if status === 'delivered'}
								<CheckCircleIcon class="mr-2 h-4 w-4 text-green-500" />
							{:else if status === 'processing'}
								<ClockIcon class="mr-2 h-4 w-4 text-yellow-500" />
							{:else if status === 'shipped'}
								<TruckIcon class="mr-2 h-4 w-4 text-red-500" />
							{/if}
							<span>{status}</span>
						</div>
					</Table.Cell>
					<Table.Cell>Josh</Table.Cell>
					<Table.Cell>$500</Table.Cell>
					<Table.Cell>19/01/25</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="default" size="sm">Update</Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	{:else}
		<p
			class="flex h-[70vh] w-full flex-col items-center justify-center gap-3 text-center text-3xl text-muted-foreground"
		>
			No orders found <Button href="/orders/add">Create new order</Button>
		</p>
	{/if}
</div>
