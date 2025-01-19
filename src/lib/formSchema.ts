import { z } from 'zod';

export const productSchema = z.object({
	name: z.string().min(1),
	description: z.string().min(3),
	category: z.number().positive(),
	subcategory: z.string().min(1),
	price: z.number().positive(),
	stock: z.number().nonnegative(),
	images: z
		.instanceof(File, { message: 'Image is required' })
		.refine((file) => file.size < 1024 * 1024 * 2, { message: 'Image must be less than 2MB' })
		.array()
});

export const categorySchema = z.object({
	name: z.string().min(1),
	description: z.string().min(3),
	subcategories: z.string().min(1).array()
});
