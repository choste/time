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

<input type="text" placeholder="enter a tag" bind:value={tagName} /><button
	on:click={() => handleAddTag()}>Add Tag</button
>
<TagPanel {tags} on:tagDelete={handleDelete} />
