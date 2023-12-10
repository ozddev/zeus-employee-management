import { redirect } from '@sveltejs/kit';
import { hasAccessToken } from '../../shared/helper';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	if (!hasAccessToken()) {
		throw redirect(303, '/');
	}

	return {};
}) satisfies PageServerLoad;
