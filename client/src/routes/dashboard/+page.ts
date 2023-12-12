import { redirect } from '@sveltejs/kit';
import { getAccessToken, getUserSub } from '../../shared/access_token/access.token.helper';
import type { PageLoad } from './$types';
import { MAIN } from '../../shared/routes';
import { PUBLIC_USER_ACTION_BASE_URL } from '$env/static/public';

export const load = (async ({ fetch }) => {
	const accessToken = getAccessToken();

	if (!accessToken) {
		throw redirect(303, MAIN);
	}

	const sub = getUserSub(accessToken);

	const response = await fetch(
		//remove the heroku url after solving the issue on the backend
		`https://cors-anywhere.herokuapp.com/${PUBLIC_USER_ACTION_BASE_URL}employees/${sub}`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	);

	return await response.json();
}) satisfies PageLoad;
