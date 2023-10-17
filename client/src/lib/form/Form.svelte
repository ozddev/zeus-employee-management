<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { formKey } from './form-key';
	import { enhance } from '$app/forms';

	const form = writable({ values: {}, errors: {} });
	setContext(formKey, form);
</script>

<form class="space-y-4 md:space-y-6" method="POST" use:enhance>
	<slot />
</form>
