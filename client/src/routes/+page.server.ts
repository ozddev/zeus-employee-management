import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }): Promise<string> => {
		//TODO: add proper env here and add error handling, maybe try with server.ts because
		//that provides a minimal http interface for svelte where you can do this
		const formData = await request.formData();
		const response = await fetch('http://localhost:7777/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				personalId: formData.get('personalId'),
				password: formData.get('password')
			})
		});

		return (await response.json()).access_token;
	}
} satisfies Actions;
