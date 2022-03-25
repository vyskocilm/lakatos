<script>
	import Switch from '../components/Switch.svelte'

	const style = {
		h1: `text-5xl text-center my-8 uppercase`,
		grid: `py-4 grid gap-4 md:grid-cols-3 grid-cols-1`,
		btn: `p-8 shrink max-w-sm text-xl text-white font-bold flex flex-col items-center text-center bg-blue-500 rounded hover:bg-blue-700 font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-500`,
	}

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
			title: 'Toto je neuveritelne!',
			sfw: true,
			src: 'http://milujipraci.cz/sfx/hosi-to-je-neuveritelne.mp3',
		},
	]

	// DOM objects
	// slice of audio objects
	let audios = []
	// other variables
	// control whenever play buttons shall be enabled/disabled
	let soundEnabled = true
	// if nsfw (with cursing) shall be enabled
	let nsfwEnabled = false

	async function play({ idx }) {
		soundEnabled = false
		await audios[idx].play()
	}
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

<!--TODO: REALLY REALLY REALLY - use components and a store here!!!-->
<!-- initialize ALL audios before -->
{#each lakatosAll as laka, idx}
	<audio
		preload="auto"
		id={idx}
		bind:this={audios[idx]}
		on:ended={() => {
			soundEnabled = true
		}}
	>
		<source src={laka.src} type="audio/mpeg" />
		<embed hidden="true" autostart="false" loop="false" src={laka.src} />
	</audio>
{/each}

<div class={style.grid}>
	{#each lakatosAll as laka, idx}
		{#if nsfwEnabled && !laka.sfw}
			<!--TODO: move to component -->
			<button class={style.btn} on:click={() => play({ idx })} disabled={!soundEnabled}
				>{laka.title}</button
			>
		{/if}
		{#if laka.sfw}
			<!--TODO: move to component -->
			<button class={style.btn} on:click={() => play({ idx })} disabled={!soundEnabled}
				>{laka.title}</button
			>
		{/if}
	{/each}
</div>
