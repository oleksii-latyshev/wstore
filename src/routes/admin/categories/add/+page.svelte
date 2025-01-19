<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { categorySchema } from '$lib/formSchema.js';
	import { filesProxy, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Loader2Icon, XIcon } from 'lucide-svelte';
	import { Badge } from '$lib/components/ui/badge';

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(categorySchema),
		dataType: 'json'
	});

	const { delayed, errors, enhance, form: formData } = form;

	let subcategoriesInput = $state('');

	function handleKeydown(event: Event) {
		const keyboardEvent = event as KeyboardEvent;
		const input = event.currentTarget as HTMLInputElement;

		if (keyboardEvent.key === ' ') {
			const word = input.value.trim();

			if (word && !$formData.subcategories.includes(word)) {
				$formData.subcategories = [...$formData.subcategories, word];
				input.value = '';
				keyboardEvent.preventDefault();
			}
		}
	}

	function handleSubcategoriesInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const value = input.value;

		if (value.endsWith(' ')) {
			const trimmedWord = value.trim();

			if (trimmedWord && !$formData.subcategories.includes(trimmedWord)) {
				$formData.subcategories = [...$formData.subcategories, trimmedWord];
				subcategoriesInput = '';
			}
		}
	}

	function removeSubcategory(targetIndex: number) {
		$formData.subcategories = $formData.subcategories.filter((_, index) => index !== targetIndex);
	}
</script>

<div class="space-y-4 p-8">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-3xl font-bold capitalize tracking-tight">Add new category</h2>
	</div>

	<form action="" method="POST" enctype="multipart/form-data">
		<Card.Root>
			<Card.Header>
				<Card.Title>Category Information</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="grid grid-cols-2 gap-4">
					<Form.Field {form} name="name">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Name</Form.Label>
								<Input {...props} bind:value={$formData.name} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="description">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Description</Form.Label>
								<Input {...props} bind:value={$formData.description} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>

				<Form.Field {form} name="subcategories">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Subcategories</Form.Label>
							{#if $formData.subcategories.length > 0}
								<div class="mb-2 flex flex-wrap gap-2">
									{#each $formData.subcategories as subcategory, index}
										<Badge
											>{subcategory}

											<button
												type="button"
												class="ml-1.5 hover:text-red-500"
												onclick={() => removeSubcategory(index)}
											>
												<XIcon class="size-3" />
											</button>
										</Badge>
									{/each}
								</div>
							{/if}
							<Input
								{...props}
								bind:value={subcategoriesInput}
								oninput={handleSubcategoriesInput}
								placeholder="Type subcategory and press space to add"
							/>
						{/snippet}
					</Form.Control>

					<Form.FieldErrors />
				</Form.Field>

				<Button type="submit"
					>{#if $delayed}
						<Loader2Icon class="size-6 animate-spin" />
					{:else}
						Add category
					{/if}
				</Button>
			</Card.Content>
		</Card.Root>
	</form>
</div>
