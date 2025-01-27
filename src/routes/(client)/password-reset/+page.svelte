<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Loader2Icon } from 'lucide-svelte';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { resetPasswordSchema } from './schemas';

	const form = superForm(defaults(zod(resetPasswordSchema)), {
		validators: zod(resetPasswordSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: formData } = form;
</script>

<div class="mt-5 grid h-[70vh] w-full place-items-center">
	<Card.Root class="w-full max-w-md">
		<Card.Content class="md:px-10">
			<Card.Header>
				<Card.Title>Reset your password</Card.Title>
				<Card.Description>
					Enter your new password and confirm it, click submit when you are ready
				</Card.Description>
			</Card.Header>
			<form action="">
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
				<Form.Button type="submit" class="mt-2 w-full">
					{#if $delayed}
						<Loader2Icon class="size-6 animate-spin" />
					{:else}
						Reset
					{/if}
				</Form.Button>
			</form>
		</Card.Content>
	</Card.Root>
</div>
