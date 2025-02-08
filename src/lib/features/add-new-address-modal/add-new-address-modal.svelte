<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { addNewAddressModalState } from '$lib/features/add-new-address-modal/states';
	import { requestPasswordModalState } from '$lib/features/reset-password-modal/states';
	import { addressSchema } from '$lib/formSchema';
	import { Loader2Icon } from 'lucide-svelte';
	import { defaults, filesProxy, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';

	const form = superForm(defaults(zod(addressSchema)), {
		validators: zod(addressSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: formData } = form;
</script>

<Dialog.Root bind:open={addNewAddressModalState.isOpen}>
	<Dialog.Content class="w-full p-5">
		<Dialog.Header class="mt-10">
			<Dialog.Title>Add Address</Dialog.Title>
			<Dialog.Description>
				Enter your address details and click save when you are ready
			</Dialog.Description>
		</Dialog.Header>
		<form action="">
			<Form.Field {form} name="name">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Name <span class="font-bold text-red-600">*</span></Form.Label>
						<Input {...props} bind:value={$formData.name} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="address">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Address <span class="font-bold text-red-600">*</span></Form.Label>
						<Input {...props} bind:value={$formData.address} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="state">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>State / Province</Form.Label>
						<Input {...props} bind:value={$formData.state} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="country">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Country <span class="font-bold text-red-600">*</span></Form.Label>
						<Input {...props} bind:value={$formData.country} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field
				{form}
				name="isDefaultShipping"
				class="flex flex-row items-start space-x-3 space-y-0 p-4"
			>
				<Form.Control>
					{#snippet children({ props })}
						<Checkbox {...props} bind:checked={$formData.isDefaultShipping} />
						<div class="space-y-1 leading-none">
							<Form.Label>
								Use as default shipping address <span class="font-bold text-red-600">*</span>
							</Form.Label>

							<input {...props} value={$formData.isDefaultShipping} hidden />
						</div>
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field
				{form}
				name="isDefaultBilling"
				class="flex flex-row items-start space-x-3 space-y-0 p-4"
			>
				<Form.Control>
					{#snippet children({ props })}
						<Checkbox {...props} bind:checked={$formData.isDefaultBilling} />
						<div class="space-y-1 leading-none">
							<Form.Label>
								Use as default billing address <span class="font-bold text-red-600">*</span>
							</Form.Label>

							<input {...props} value={$formData.isDefaultBilling} hidden />
						</div>
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Button class="mt-2 w-full">
				{#if $delayed}
					<Loader2Icon class="size-6 animate-spin" />
				{:else}
					Add Address
				{/if}
			</Form.Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
