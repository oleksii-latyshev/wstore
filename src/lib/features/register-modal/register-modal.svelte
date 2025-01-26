<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { registerSchema } from '$lib/features/register-modal/schemas';
	import { registerModalState } from '$lib/features/register-modal/states';
	import { Loader2Icon } from 'lucide-svelte';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';

	const form = superForm(defaults(zod(registerSchema)), {
		validators: zod(registerSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: formData } = form;
</script>

<Dialog.Root bind:open={registerModalState.isOpen}>
	<Dialog.Content class="w-full p-5">
		<Dialog.Header class="mt-10">
			<Dialog.Title>Create your account</Dialog.Title>
			<Dialog.Description>
				Enter your email and password to create an account, click login when you are ready
			</Dialog.Description>
		</Dialog.Header>
		<form action="">
			<Form.Field {form} name="name">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Name</Form.Label>
						<Input {...props} bind:value={$formData.name} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input {...props} bind:value={$formData.email} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="password">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Password</Form.Label>
						<Input {...props} bind:value={$formData.password} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="confirmPassword">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Confirm Password</Form.Label>
						<Input {...props} bind:value={$formData.confirmPassword} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<button type="button" class="text-sm text-primary">forgot your password?</button>

			<Form.Button class="mt-2 w-full">
				{#if $delayed}
					<Loader2Icon class="size-6 animate-spin" />
				{:else}
					Login
				{/if}
			</Form.Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
