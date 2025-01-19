import type { PageServerLoad } from './$types';

import { productSchema } from '$lib/formSchema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async () => {
	const form = await superValidate(zod(productSchema));

	return { form };
}) satisfies PageServerLoad;
