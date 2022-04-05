<script>
	import { stats, clips } from '../stores/lakatos.js'
	import { onDestroy } from 'svelte'
	export let nsfwEnabled

	const style = {
		grid: `grid gap-1 md:grid-cols-2 grid-cols-1 lg:grid-cols-3`,
		point: `flex flex-col items-center text-center h-7 w-7`,
	}
	let results = []

	const unsubscribe = stats.subscribe((stats) => {
		for (const foo of stats) {
			const idx = foo[0]
			const clicks = foo[1]

			// TODO: better way of showing the number of clicks
			if (clicks > 3) {
				if (results[idx] === undefined) {
					continue
				}
				results[idx].style.color = 'red'
			}
		}
	})
	onDestroy(unsubscribe)
</script>

<div class={style.grid}>
	{#each $clips as clip, idx}
		{#if nsfwEnabled && !clip.sfw}
			<div class={style.point} bind:this={results[idx]}>
				{$stats.get(idx)}
			</div>
		{/if}
		{#if !nsfwEnabled && clip.sfw}
			<div class={style.point} bind:this={results[idx]}>
				{$stats.get(idx)}
			</div>
		{/if}
	{/each}
</div>
