<script>
	import TagPanel from '$lib/TagPanel.svelte';

	let tagName = '';
	let tags = [];

	function handleAddTag() {
		tags = [...tags, { name: tagName }];
		tagName = '';
	}

	function handleDelete(event) {
		const tagToDelete = event.detail.tagName;
		tags = tags.filter(({ name }) => name != tagToDelete);
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
