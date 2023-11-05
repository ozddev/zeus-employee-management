<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/card/Card.svelte';

	export let data: PageData;
</script>

<Card title={data.firstName} clientData={data} />
