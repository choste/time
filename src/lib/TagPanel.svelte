<script>
	export let tags = [];
</script>

<p>Tags</p>
<div data-testid="tag-panel">
	{tags.map(({ name }) => name).join(',')}
</div>
