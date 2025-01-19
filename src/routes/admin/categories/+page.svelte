<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';
	import { ClipboardIcon } from 'lucide-svelte';

	let showCategories = $state(true);

	let { data } = $props();
</script>

<div class="space-y-4 p-8">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-3xl font-bold capitalize tracking-tight">Categories</h2>
		<div class="flex items-center space-x-2">
			<Input class="w-[150px] lg:w-[250px]" placeholder="Search categories.." />
			<Button href="categories/add">Add category</Button>
		</div>
	</div>
	{#if showCategories}
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">ID</Table.Head>
					<Table.Head>Name</Table.Head>
					<Table.Head>Number of subcategories</Table.Head>
					<Table.Head>Description</Table.Head>
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
					<Table.Cell class="capitalize">Electronics</Table.Cell>
					<Table.Cell>5</Table.Cell>
					<Table.Cell>Something interesting I guess</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="destructive" size="sm">Delete</Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	{:else}
		<p
			class="flex h-[70vh] w-full flex-col items-center justify-center gap-3 text-center text-3xl text-muted-foreground"
		>
			No categories found <Button href="/categories/add">Create new user</Button>
		</p>
	{/if}
</div>
