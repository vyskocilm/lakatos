<script>
	import Switch from '../components/Switch.svelte'
	import SoundClips from '../components/SoundClips.svelte'

	const style = {
		h1: `text-5xl text-center my-8 uppercase`,
	}

	// move to store????
	const lakatosAll = [
		{
			title: 'Ani za kokot vole!',
			src: 'http://milujipraci.cz/sfx/ani-za-kokot-vole.mp3',
		},
		{
			title: 'Do Pice!!',
			src: 'http://milujipraci.cz/sfx/do-pice.mp3',
		},
		{
			title: 'Hajzli jedni!',
			src: 'http://milujipraci.cz/sfx/hajzli-jedni.mp3',
		},
		{
			sfw: true,
			title: 'Toto je neuveritelne!',
			src: 'http://milujipraci.cz/sfx/hosi-to-je-neuveritelne.mp3',
		},
	]

	// internal state
	// soundEnabled control whenever play buttons shall be enabled/disabled
	let soundEnabled = true
	// nsfwEnabled if (with cursing) shall be enabled
	let nsfwEnabled = false
</script>

<h1 class={style.h1}>Svelte Kit Lakatos</h1>

<!--TODO: initial checked= works in a weird way -->
<Switch
	disabled={!soundEnabled}
	on:click={(e) => {
		nsfwEnabled = e.detail.checked
	}}
	text="NSFW"
/>

<SoundClips
	clips={lakatosAll}
	{soundEnabled}
	{nsfwEnabled}
	on:ended={() => {
		soundEnabled = true
	}}
	on:play={() => {
		soundEnabled = false
	}}
/>
