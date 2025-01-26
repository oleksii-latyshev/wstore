<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { loginModalState } from '$lib/features/login-modal/states';
	import { mobileAuthModalState } from '$lib/features/mobile-auth-modal/states';
	import { registerModalState } from '$lib/features/register-modal/states';
</script>

<Dialog.Root bind:open={mobileAuthModalState.isOpen}>
	<Dialog.Content class="w-full p-5">
		<Dialog.Header class="mt-10">
			<Dialog.Title>Login to your account</Dialog.Title>
			<Dialog.Description>
				Enter your email and password to login, click login when you are ready
			</Dialog.Description>
		</Dialog.Header>
		<div class="hidden items-center gap-2 md:flex">
			<Button
				variant="ghost"
				onclick={() => {
					mobileAuthModalState.close();
					loginModalState.open();
				}}
			>
				Login
			</Button>
			<Button
				onclick={() => {
					mobileAuthModalState.close();
					registerModalState.open();
				}}
			>
				Register
			</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>
