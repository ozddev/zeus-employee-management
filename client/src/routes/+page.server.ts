import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { PUBLIC_GATEWAY_BASE_URL } from '$env/static/public';

export const actions: Actions = {
	default: async ({ request }) => {
		//TODO: add proper env here and add error handling, maybe try with server.ts because
		//that provides a minimal http interface for svelte where you can do this
		const formData = await request.formData();
		const personalId = formData.get('personalId');

		const response = await fetch(`${PUBLIC_GATEWAY_BASE_URL}auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				personalId: personalId,
				password: formData.get('password')
			})
		});

		if (!response.ok) {
			return fail(400, { personalId, incorrect: true });
		}

		return { accessToken: (await response.json()).access_token };
	}
} satisfies Actions;
