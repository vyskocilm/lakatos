<script>
	const style = {
		h1: `text-5xl text-center my-8 uppercase`,
		grid: `py-4 grid gap-4 md:grid-cols-3 grid-cols-1`,
		btn: `p-8 shrink max-w-sm text-xl text-white font-bold flex flex-col items-center text-center bg-blue-500 rounded hover:bg-blue-700 font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-500`,
		switchEnabled: `toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full`,
		switchDisabled: `toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full`,
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
	// nsfwSwitchRound
	let nsfwSwitchRound
	// other variables
	// control whenever play buttons shall be enabled/disabled
	let soundEnabled = true
	// if nsfw (with cursing) shall be enabled
	let nsfwEnabled = false

	async function play({ idx }) {
		soundEnabled = false
		// FIXME: this mixes a logic of two components
		nsfwSwitchRound.style.cursor = 'not-allowed'
		await audios[idx].play()
	}
</script>

<h1 class={style.h1}>Svelte Kit Lakatos</h1>

<label for="nsfw-switch" class="flex items-center cursor-pointer relative mb-4">
	<input
		type="checkbox"
		id="nsfw-switch"
		class="sr-only"
		disabled={!soundEnabled}
		on:click={() => {
			nsfwEnabled = !nsfwEnabled
		}}
	/>
	<div id="foo" class={style.switchEnabled} bind:this={nsfwSwitchRound} />
	<span class="ml-3 text-gray-900 text-sm font-medium">NSFW</span>
</label>

<!--TODO: REALLY REALLY REALLY - use components and a store here!!!-->
<!-- initialize ALL audios before -->
{#each lakatosAll as laka, idx}
	<audio
		preload="auto"
		id={idx}
		bind:this={audios[idx]}
		on:ended={() => {
			soundEnabled = true
			// FIXME: this mixes a logic of two components
			nsfwSwitchRound.style.cursor = ''
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

<style>
	.toggle-bg:after {
		content: '';
		@apply absolute top-0.5 left-0.5 bg-white border border-gray-300 rounded-full h-5 w-5 transition shadow-sm;
	}

	input:checked + .toggle-bg:after {
		transform: translateX(100%);
		@apply border-white;
	}

	input:checked + .toggle-bg {
		@apply bg-blue-600 border-blue-600;
	}
</style>
