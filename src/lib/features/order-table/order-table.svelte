<script lang="ts">
	import * as Table from '$lib/components/ui/table';
</script>

<Table.Root class="rounded-md border">
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]"></Table.Head>
			<Table.Head>Name Date</Table.Head>
			<Table.Head>Sku</Table.Head>
			<Table.Head>Unit price</Table.Head>
			<Table.Head>Quantity</Table.Head>
			<Table.Head class="text-right">Total</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		<Table.Row>
			<Table.Cell>
				<img
					src="https://i.pinimg.com/736x/a9/7f/3f/a97f3f05cf4e1b4c239a0f6e00521eae.jpg"
					class="size-16 rounded-lg"
					alt=""
				/>
			</Table.Cell>
			<Table.Cell>Sneakers</Table.Cell>
			<Table.Cell>GASD4531F</Table.Cell>
			<Table.Cell>$340</Table.Cell>
			<Table.Cell>2</Table.Cell>
			<Table.Cell class="text-right">$680</Table.Cell>
		</Table.Row>
	</Table.Body>
</Table.Root>
