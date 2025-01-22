<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { MenuIcon, ShoppingCartIcon } from 'lucide-svelte';
	import { MENU_PAGES } from '$lib/features/header/constants';
	import { getAvatarFallbackText } from '$lib/features/header/helpers';
	import LoginModal from '$lib/features/login-modal/login-modal.svelte';
	import { loginModalState } from '$lib/features/login-modal/states';

	let user = true;
	let isAdmin = true;
</script>

<header
	class="sticky left-0 top-0 z-50 flex items-center justify-between border bg-background p-3 md:px-10"
>
	<a href="/" class="text-2xl capitalize">
		<span class="font-bold text-primary">Svelte</span>
		<span>Store front</span>
	</a>
	<div class="flex items-center gap-2 md:gap-6">
		{#if user}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Avatar.Root>
						<Avatar.Image
							src="https://i.pinimg.com/736x/f4/26/10/f426108d4bc2a04c619f1456a310a7e5.jpg"
							alt="John Doe"
						/>
						<Avatar.Fallback>{getAvatarFallbackText('John Doe')}</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>

				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Separator />
						{#each MENU_PAGES as { href, title }}
							<DropdownMenu.Item>
								{#snippet child({ props })}
									<a {href} {...props}>
										{title}
									</a>
								{/snippet}
							</DropdownMenu.Item>
						{/each}

						{#if isAdmin}
							<DropdownMenu.Item>
								{#snippet child({ props })}
									<a href="/admin" {...props}>Admin Dashboard</a>
								{/snippet}
							</DropdownMenu.Item>
						{/if}
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Logout</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{:else}
			<div class="hidden items-center gap-2 md:flex">
				<Button variant="ghost" onclick={loginModalState.open}>Login</Button>
				<Button>Register</Button>
			</div>
			<button
				class="flex size-10 items-center justify-center rounded-full hover:bg-secondary md:hidden"
			>
				<MenuIcon class="size-6" />
			</button>
		{/if}

		{#if user}
			<button class="relative inline-block h-fit w-fit">
				<div
					class="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-white"
				>
					5
				</div>
				<ShoppingCartIcon class="size-8" />
			</button>
		{/if}
	</div>
</header>

<LoginModal />
