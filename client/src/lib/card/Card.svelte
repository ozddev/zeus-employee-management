<script lang="ts">
	import Button from '$lib/button/Button.svelte';

	export let title: string;
	export let clientData: {};

	const clientDataValues = Object.values(clientData);
	const clientObjectKeys = Object.keys(clientData);
</script>

<div
	class="block p-1.5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h5>
	{#each clientDataValues as values, index}
		<div>
			<label for={clientObjectKeys[index]} class="dark:text-gray-400 font-bold">
				{clientObjectKeys[index]}:
			</label>
			<span class="font-normal dark:text-gray-400">
				{values}
			</span>
		</div>
	{/each}

	<div class="my-4">
		<Button type="button" text="Download Fluturas" />
	</div>
</div>
