<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import { ArrowUpIcon, ShoppingCartIcon } from 'lucide-svelte';
</script>

<div class="flex-1 space-y-4 p-8 pt-6">
	<h2 class="text-3xl font-bold capitalize tracking-tight">Dashboard</h2>
	<div class="grid gap-4 md:grid-cols-2">
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Total revenue</Card.Title>
				<ShoppingCartIcon class="size-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<h3 class="text-2xl font-bold">$500</h3>
				<p class="text-xs text-muted-foreground">50% from last month</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">New Customers</Card.Title>
				<ArrowUpIcon class="size-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<h3 class="text-2xl font-bold">+20</h3>
				<p class="text-xs text-muted-foreground">+50% from last month</p>
			</Card.Content>
		</Card.Root>
	</div>

	<Card.Root>
		<Card.Header>
			<Card.Title>Recent Orders Title</Card.Title>
		</Card.Header>
		<Card.Content>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[100px]">Order</Table.Head>
						<Table.Head>Status</Table.Head>
						<Table.Head>Customer</Table.Head>
						<Table.Head class="text-right">AMT + SHP</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell class="font-medium">INV001</Table.Cell>
						<Table.Cell>Processing</Table.Cell>
						<Table.Cell>Human name</Table.Cell>
						<Table.Cell class="text-right">$500</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table.Root>
		</Card.Content>
	</Card.Root>
</div>
