<script lang="ts">
	import TagPanel from '$lib/TagPanel.svelte';
	import { tagStore } from '$lib/store';
	import { onMount } from 'svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		tagStore.set(data.feed.map(({ name }) => ({ name })));
	});

	let tagName = '';
	/**
	 * @type {{name: String}[]}
	 */
	let tags = [];

	tagStore.subscribe((value) => {
		tags = value;
	});

	function handleAddTag() {
		tagStore.update((tags) => [...tags, { name: tagName }]);
		tagName = '';
	}

	/**
	 * @param {{ detail: { tagName: string; }; }} event
	 */
	function handleDelete(event) {
		const tagToDelete = event.detail.tagName;
		tagStore.update((tags) => tags.filter(({ name }) => name != tagToDelete));
	}
</script>

<main class="container mx-auto">
	<form
		class="flex w-full flex-row justify-between p-2 pt-10"
		on:submit|preventDefault={() => handleAddTag()}
	>
		<input
			type="text"
			class="rounded-full border border-solid border-indigo-300 px-2"
			placeholder="enter a tag"
			bind:value={tagName}
		/>
		<button class="bg-indigo-700 px-3 py-1 text-white">Add Tag</button>
	</form>
	<TagPanel {tags} on:tagDelete={handleDelete} />
</main>
