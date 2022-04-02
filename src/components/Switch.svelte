<script>
	import { createEventDispatcher } from 'svelte'

	export let id = ''
	export let checked = false
	export let disabled = false
	export let text

	let elSwitch

	const dispatch = createEventDispatcher()
	function toggle() {
		checked = !checked
		dispatch('click', {
			checked: checked,
		})
	}

	const style = {
		switch: `toggle-bg bg-gray-200 border-2 border-gray-200 h-5 w-9 rounded-full`,
		switchText: `ml-3 text-gray-900 font-medium`,
		switchLabel: `flex items-center cursor-pointer relative mb-4`,
	}

	$: {
		if (elSwitch != undefined) {
			elSwitch.style.cursor = disabled ? 'not-allowed' : ''
		}
	}
</script>

<label for={id} class={style.switchLabel} bind:this={elSwitch}>
	<input type="checkbox" {id} class="sr-only" {checked} {disabled} on:click={toggle} />
	<div class={style.switch} />
	<span class={style.switchText}>{text}</span>
</label>

<style>
	.toggle-bg:after {
		content: '';
		@apply absolute top-0.5 left-0.5 bg-white border border-gray-300 rounded-full h-4 w-4 transition shadow-sm;
	}

	input:checked + .toggle-bg:after {
		transform: translateX(100%);
		@apply border-white;
	}

	input:checked + .toggle-bg {
		@apply bg-blue-600 border-blue-600;
	}
</style>
