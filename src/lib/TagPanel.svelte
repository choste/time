<script>
	export let tags = [];
</script>

<p class="font-bold my-2 ml-1">Tags</p>
<div data-testid="tag-panel">
	{#each tags as tag}
		<div class="bg-green-400 rounded-full px-2 m-2 w-fit">
			<span>
				{tag.name}
			</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-4 h-4 inline-block mb-0.5"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</div>
	{/each}
</div>
