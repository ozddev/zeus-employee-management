<script lang="ts">
	import { getContext } from 'svelte';
	import { v4 as uuid } from 'uuid';
	import { formKey } from './form-key';
	import type { InputType } from '../../utils/types/component';

	export let text: string;
	export let type: InputType;
	export let name: string;
	export let placeholder: string = '';
	export let required: boolean = false;
	const id = uuid();

	const formStore: any = getContext(formKey);
</script>

<div>
	<label for={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{text}</label
	>
	<input
		{id}
		{type}
		{name}
		{placeholder}
		class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		{required}
		on:input={(e) => {
			$formStore.values[name] = e.currentTarget.value;
		}}
	/>
</div>
