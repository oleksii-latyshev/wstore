<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { requestPasswordResetSchema } from '$lib/features/reset-password-modal/schemas';
	import { requestPasswordModalState } from '$lib/features/reset-password-modal/states';
	import { Loader2Icon } from 'lucide-svelte';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';

	const form = superForm(defaults(zod(requestPasswordResetSchema)), {
		validators: zod(requestPasswordResetSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: formData } = form;
</script>

<Dialog.Root bind:open={requestPasswordModalState.isOpen}>
	<Dialog.Content class="w-full p-5">
		<Dialog.Header class="mt-10">
			<Dialog.Title>Request to reset your password</Dialog.Title>
			<Dialog.Description>
				Enter your email to request a password reset, click submit when you are ready
			</Dialog.Description>
		</Dialog.Header>
		<form action="">
			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input {...props} bind:value={$formData.email} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button type="submit" class="mt-2 w-full">
				{#if $delayed}
					<Loader2Icon class="size-6 animate-spin" />
				{:else}
					Login
				{/if}
			</Form.Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
