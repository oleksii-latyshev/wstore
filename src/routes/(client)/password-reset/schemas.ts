import { loginSchema } from '$lib/features/login-modal/schemas';
import { z } from 'zod';

export const resetPasswordSchema = z
	.object({
		password: loginSchema.shape.password,
		confirmPassword: loginSchema.shape.password
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords must match',
		path: ['confirmPassword']
	});
