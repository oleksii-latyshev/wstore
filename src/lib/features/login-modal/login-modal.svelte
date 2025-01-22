<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { loginSchema } from '$lib/features/login-modal/schemas';
	import { loginModalState } from '$lib/features/login-modal/states';
	import { Loader2Icon } from 'lucide-svelte';
	import { defaults, filesProxy, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';

	const form = superForm(defaults(zod(loginSchema)), {
		validators: zod(loginSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: formData } = form;
</script>

<Dialog.Root bind:open={loginModalState.isOpen}>
	<Dialog.Trigger>Open</Dialog.Trigger>

	<Dialog.Content class="w-full p-5">
		<Dialog.Header class="mt-10">
			<Dialog.Title>Login to your account</Dialog.Title>
			<Dialog.Description>
				Enter your email and password to login, click login when you are ready
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
			<Form.Field {form} name="password">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Password</Form.Label>
						<Input {...props} bind:value={$formData.password} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<button type="button" class="text-sm text-primary">forgot your password?</button>

			<Form.Button>
				{#if $delayed}
					<Loader2Icon class="size-6 animate-spin" />
				{:else}
					Login
				{/if}
			</Form.Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
