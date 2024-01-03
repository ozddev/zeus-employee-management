<script lang="ts">
	import type { Client } from '../../shared/access_token/types';
	import { jsPDF } from 'jspdf';

	export let title: string;
	export let clientData: Client;

	const clientDataValues = Object.values(clientData);
	const clientObjectKeys = Object.keys(clientData);

	//MOVE IT TO SERVER SIDE LATER ON
	function downloadPdf() {
		const doc = new jsPDF({
			orientation: 'landscape',
			unit: 'in',
			format: [4, 2]
		});
		doc.text(`Fluturas for ${clientData['firstName']} ${clientData['lastName']}`, 1, 1);
		doc.save('fluturas.pdf');
	}
	//END TODO
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
		<button
			on:click={downloadPdf}
			class="w-full text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>Download Fluturas</button
		>
	</div>
</div>
