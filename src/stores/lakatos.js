import { readable, writable } from 'svelte/store';

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

export const clips = readable(lakatosAll)
export const stats = writable(new Map(lakatosAll.map((x, idx) => [idx, 0])))
