<script lang="ts">
	import type { PageData } from './$types';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { ChevronDownIcon } from 'lucide-svelte';
	import OrderTable from '$lib/features/order-table/order-table.svelte';

	let { data }: { data: PageData } = $props();
	let status = 'processing';
	let order = false;
</script>

{#if order}
	<Collapsible.Root class="mb-2">
		<div class="flex items-center justify-between rounded-md bg-muted p-5">
			<div class="flex flex-wrap items-center justify-between gap-3 md:gap-10">
				<div>
					<p class="text-sm font-medium capitalize">Date placed</p>
					<p class="text-sm text-muted-foreground">11/11/2025</p>
				</div>
				<div>
					<p class="text-sm font-medium capitalize">Total sum</p>
					<p class="text-sm text-muted-foreground">$9000</p>
				</div>
				<div>
					<p class="text-sm font-medium capitalize">Order number</p>
					<p class="text-sm text-muted-foreground">ASDW-12321-SDASds</p>
				</div>
				<div>
					<p class="text-sm font-medium capitalize">Status</p>
					<span
						class={cn(
							'inline-flex items-center justify-center rounded-full border px-2 py-1 text-sm font-medium',
							{
								'border-yellow-200 bg-yellow-100 text-yellow-800': status === 'processing',
								'border-green-200 bg-green-100 text-green-800': ['shipped', 'delivered'].includes(
									status
								)
							}
						)}
					>
						{status}
					</span>
				</div>
			</div>
			<Collapsible.Trigger>
				<Button variant="ghost" size="sm" class="w-9 p-0">
					<ChevronDownIcon class="size-4" />
					<span class="sr-only">toggle</span>
				</Button>
			</Collapsible.Trigger>
		</div>

		<Collapsible.Content class="m-0 space-y-2 p-0">
			<OrderTable />
		</Collapsible.Content>
	</Collapsible.Root>
{:else}
	<div class="flex h-[50vh] w-full flex-col items-center justify-center gap-3 text-center">
		<h1 class="text-3xl font-semibold">You haven't made any orders yet</h1>
		<p class="text-muted-foreground">You will find all the detail of your order here</p>
	</div>
{/if}
