<script lang="ts">
	export let title: string;
	export let clientData: {};

	const clientDataValues = Object.values(clientData);
</script>

<div
	class="block p-1.5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h5>
	{#each clientDataValues as values}
		<p class="font-normal text-gray-700 dark:text-gray-400">
			{values}
		</p>
	{/each}
</div>
