<script>
	import { onDestroy } from 'svelte'
	import { createEventDispatcher } from 'svelte'
	import { clips, stats } from '../stores/lakatos.js'
	export let nsfwEnabled
	export let soundEnabled

	const dispatch = createEventDispatcher()

	let audios = []

	async function play({ idx }) {
		soundEnabled = false
		dispatch('play', {
			soundEnabled: soundEnabled,
			idx: idx,
		})
		await audios[idx].play()
	}

	const style = {
		grid: `py-4 grid gap-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3`,
		btn: `p-6 shrink text-xl text-white font-bold flex items-center text-center bg-blue-500 rounded hover:bg-blue-700 font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-400`,
		title: `text-left justify-start w-5/6`,
		separator: `text-center text-5xl text-bold`,
		score: `text-right justify-end`,
	}

	let scoreDiv = []

	const unsubscribe = stats.subscribe((value) => {
		for (const el of value) {
			const idx = el[0]
			const num = el[1]
			if (scoreDiv[idx] === undefined || scoreDiv[idx] === null) {
				continue
			}
			scoreDiv[idx].textContent = num
		}
	})
	onDestroy(unsubscribe)
</script>

{#each $clips as clip, idx}
	<audio
		preload="auto"
		id="`audio-{idx}`"
		bind:this={audios[idx]}
		on:ended={() => {
			soundEnabled = true
			dispatch('ended', { soundEnabled: soundEnabled })
		}}
	>
		<source src={clip.src} type="audio/mpeg" />
	</audio>
{/each}

<div class={style.grid}>
	{#each $clips as clip, idx}
		{#if nsfwEnabled && !clip.sfw}
			<button class={style.btn} on:click={() => play({ idx })} disabled={!soundEnabled}>
				<div class={style.title}>
					{clip.title}
				</div>
				<div class={style.separator}>‣&nbsp;</div>
				<div class={style.score} bind:this={scoreDiv[idx]}>
					{$stats.get(idx)}
				</div>
			</button>
		{/if}
		{#if !nsfwEnabled && clip.sfw}
			<button class={style.btn} on:click={() => play({ idx })} disabled={!soundEnabled}>
				<div class={style.title}>
					{clip.title}
				</div>
				<div class={style.separator}>‣&nbsp;</div>
				<div class={style.score} bind:this={scoreDiv[idx]}>
					{$stats.get(idx)}
				</div>
			</button>
		{/if}
	{/each}
</div>
