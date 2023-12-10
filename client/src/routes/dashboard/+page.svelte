<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/card/Card.svelte';
	import { browser } from '$app/environment';

	export let data: PageData;
	$: if (browser) {
		console.log(localStorage.getItem('accessToken'));
	}
</script>

<Card title={data.firstName} clientData={data} />
