<script>
	import Switch from '../components/Switch.svelte'
	import SoundClips from '../components/SoundClips.svelte'
	import { stats } from '../stores/lakatos.js'

	const style = {
		h1: `text-5xl text-center my-8 uppercase`,
	}

	// internal state
	// soundEnabled control whenever play buttons shall be enabled/disabled
	let soundEnabled = true
	// nsfwEnabled if version with cursing shall be enabled
	let nsfwEnabled = false
</script>

<h1 class={style.h1}>Svelte Kit Lakatos</h1>

<div class="ml-12 mr-12">
	<Switch
		disabled={!soundEnabled}
		on:click={(e) => {
			nsfwEnabled = e.detail.checked
		}}
		text={nsfwEnabled ? 'SFW' : 'NSFW'}
	/>
	<SoundClips
		{soundEnabled}
		{nsfwEnabled}
		on:play={(e) => {
			soundEnabled = false
			const idx = e.detail.idx
			stats.update((n) => n.set(idx, n.get(idx) + 1))
		}}
		on:ended={() => {
			soundEnabled = true
		}}
	/>
</div>
