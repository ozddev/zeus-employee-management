<script lang="ts">
	import { Field, Form } from '$lib/form';
	import { Button } from '$lib/button';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';
	import { DASHBOARD } from '../shared/routes';

	export let form: ActionData;

	//todo: handle in case wrong creds
	$: if (form && !form.incorrect) {
		const accessToken = form as { accessToken: string };
		localStorage.setItem('accessToken', accessToken.accessToken);
		goto(DASHBOARD);
	}
</script>

<div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
	<img class="w-50 h-20 mr-1" src="images/Zeus_dunkel-removebg.png" alt="logo" />
	<div>Zeus Dunkel</div>
</div>
<div
	class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
>
	<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
		<h1
			class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
		>
			Sign in to your account
		</h1>
		<Form>
			<Field
				name="personalId"
				type="text"
				text="Your personal Id"
				placeholder="Personal ID"
				required={true}
			/>
			<Field
				name="password"
				type="password"
				text="Your password"
				placeholder="••••••••"
				required={true}
			/>
			{#if form?.incorrect}
				<div
					class="p-4 mb-4 text-sm text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
					role="alert"
				>
					<span class="font-medium">One of the submitted fields was incorrect!</span>
				</div>
			{/if}
			<Button type="submit" text="Sign In" />
		</Form>
	</div>
</div>
