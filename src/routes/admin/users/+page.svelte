<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';

	let showUsers = $state(true);

	let { data } = $props();
</script>

<div class="space-y-4 p-8">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-3xl font-bold capitalize tracking-tight">Users</h2>
		<div class="flex items-center space-x-2">
			<Input class="w-[150px] lg:w-[250px]" placeholder="Search users.." />
			<Button href="/users/add">Add user</Button>
		</div>
	</div>
	{#if showUsers}
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">Name</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Role</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Join Date</Table.Head>
					<Table.Head>Total spent</Table.Head>
					<Table.Head class="text-right">Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell class="font-medium">Josh</Table.Cell>
					<Table.Cell>josh@gmail.com</Table.Cell>
					<Table.Cell>admin</Table.Cell>
					<Table.Cell>active</Table.Cell>
					<Table.Cell>19/01/25</Table.Cell>
					<Table.Cell>$500</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="destructive" size="sm">Ban</Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	{:else}
		<p
			class="flex h-[70vh] w-full flex-col items-center justify-center gap-3 text-center text-3xl text-muted-foreground"
		>
			No users found <Button href="/users/add">Create new user</Button>
		</p>
	{/if}
</div>
