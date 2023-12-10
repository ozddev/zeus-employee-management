import { redirect } from '@sveltejs/kit';
import { getAccessToken } from '../../shared/helper';
import type { PageLoad } from './$types';
import { MAIN } from '../../shared/routes';

export const load = (async ({ fetch }) => {
	const accessToken = getAccessToken();

	if (!accessToken) {
		throw redirect(303, MAIN);
	}

	const response = await fetch('http://localhost:7777/employees/652d26915b600af263e46a65', {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			mode: 'cors'
		}
	});

	return await response.json();
}) satisfies PageLoad;
