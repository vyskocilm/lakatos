<script context="module">
	// TODO: does not solve the loading problem fully
	// alternative would be to fetch list of clips via onMount like
	// https://svelte.dev/tutorial/onmount
	export const prerender = false
</script>

<script>
	import Fork from '../components/Fork.svelte'
	import Switch from '../components/Switch.svelte'
	import SoundClips from '../components/SoundClips.svelte'
	import { stats, saveResults } from '../stores/lakatos.js'

	const style = {
		mainDiv: `ml-12 mr-12`,
		h1: `text-4xl text-center my-8 uppercase`,
	}

	// internal state
	// soundEnabled control whenever play buttons shall be enabled/disabled
	let soundEnabled = true
	// nsfwEnabled if version with cursing shall be enabled
	let nsfwEnabled = false
</script>

<Fork href="http://github.com/vyskocilm/lakatos" />

<h1 class={style.h1}>Lakatoš</h1>

<div class={style.mainDiv}>
	<div class="grid grid-cols-6 text-xs">
		<Switch
			id="swf-switch"
			disabled={!soundEnabled}
			on:click={(e) => {
				nsfwEnabled = e.detail.checked
			}}
			text={nsfwEnabled ? 'SFW' : 'NSFW'}
		/>
		<Switch
			id="store-switch"
			checked={saveResults}
			on:click={(e) => {
				saveResults.update((n) => {
					n = e.detail.checked
					return n
				})
			}}
			text={!$saveResults ? 'Ulož výsledky' : 'Smaž výsledky'}
		/>
		<div>
			| <a href="https://milujipraci.cz">milujipraci.cz</a>
			/ <a href="https://www.youtube.com/watch?v=SiUz_akTmcY">zdroj</a> |
		</div>
		<div>
			| <a href="https://kit.svetle.dev">kit.svelte.dev</a> |
		</div>
		<div>
			| <a href="https://tailwindcss.com">tailwindcss.com</a> |
		</div>
		<div>
			| <a href="https://vercel.com">vercel.com</a> |
		</div>
	</div>
	<SoundClips
		{soundEnabled}
		{nsfwEnabled}
		on:play={(e) => {
			soundEnabled = false
			const idx = e.detail.idx
			stats.update((n) => {
				n[idx] += 1
				return n
			})
		}}
		on:ended={() => {
			soundEnabled = true
		}}
	/>
</div>

<style>
	a {
		@apply underline text-blue-600;
	}
	a:hover {
		@apply text-rose-900;
	}
</style>
