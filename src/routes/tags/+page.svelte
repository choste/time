<script>
	import TagPanel from '$lib/TagPanel.svelte';

	let tagName = '';
	let tags = [];

	function handleAddTag() {
		console.log('noice, noice');
		tags = [...tags, { name: tagName }];
		tagName = '';
	}
</script>

<input type="text" placeholder="enter a tag" bind:value={tagName} /><button
	on:click={() => handleAddTag()}>Add Tag</button
>
<TagPanel {tags} />
