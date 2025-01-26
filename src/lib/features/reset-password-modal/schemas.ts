import { loginSchema } from '$lib/features/login-modal/schemas';

export const requestPasswordResetSchema = loginSchema.pick({
	email: true
});
