import { redirect } from '@sveltejs/kit';
import { hasAccessToken } from '../shared/helper';
import type { PageLoad } from './$types';
import { DASHBOARD } from '../shared/routes';

export const load = (async () => {
	if (hasAccessToken()) {
		throw redirect(303, DASHBOARD);
	}

	return {};
}) satisfies PageLoad;
