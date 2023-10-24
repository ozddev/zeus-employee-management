<script lang="ts">
	import type { ButtonType } from '../../utils/types/component';

	export let text: string;
	export let type: ButtonType;
</script>

<button
	{type}
	class="w-full text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
	>{text}</button
>
