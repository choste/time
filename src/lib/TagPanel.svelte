<script>
	import { createEventDispatcher } from 'svelte';

	export let tags = [{ name: 'test' }];

	const dispatch = createEventDispatcher();
</script>

<p class="my-2 ml-1 font-bold">Tags</p>
<div data-testid="tag-panel" class="h-96 bg-white p-2 drop-shadow-xl">
	{#each tags as tag}
		<div class="m-0.5 inline-block w-fit rounded-full bg-indigo-700 px-2 text-white drop-shadow">
			<button
				on:click={() => {
					dispatch('tagDelete', { tagName: tag.name });
				}}
			>
				<svg
					data-testid="delete-{tag.name}"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="-ml-1 mb-0.5 inline-block h-4 w-4"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
			<span class="pr-2">
				{tag.name}
			</span>
		</div>
	{/each}
</div>
