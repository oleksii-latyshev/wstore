import { categorySchema } from '$lib/formSchema';
import type { PageServerLoad } from './$types';

import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async () => {
	const form = await superValidate(zod(categorySchema));

	return { form };
}) satisfies PageServerLoad;
