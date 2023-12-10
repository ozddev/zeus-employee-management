import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import { ACCESS_TOKEN } from '../../shared/constants';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	let accessToken = '';

	if (browser) {
		accessToken = localStorage.getItem(ACCESS_TOKEN) ?? '';
		throw redirect(303, '/');
	}

	const response = await fetch('http://localhost:7777/employees/652d26915b600af263e46a65', {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			mode: 'cors'
		}
	});

	return await response.json();
}) satisfies PageLoad;
