import { loginSchema } from '$lib/features/login-modal/schemas';
import { z } from 'zod';

export const registerSchema = loginSchema
	.extend({
		name: z.string().min(3).max(100),
		confirmPassword: z.string().min(8).max(100)
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords must match',
		path: ['confirmPassword']
	});
