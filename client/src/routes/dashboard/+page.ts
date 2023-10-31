import { browser } from '$app/environment';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	let accessToken = '';

	if (browser) {
		accessToken = localStorage.getItem('accessToken') ?? '';
	}

	const response = await fetch('http://localhost:7777/employees/652d26915b600af263e46a65', {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			mode: 'cors'
		}
	});

	return await response.json();
}) satisfies PageLoad;
