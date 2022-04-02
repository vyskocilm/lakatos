import { readable, writable } from 'svelte/store';
import { assets } from '$app/paths';

	const lakatosAll = [
		{
			title: 'Ani za kokot vole!',
            src: `${assets}/ani-za-kokot-vole.mp3`,
		},
		{
			title: 'Do Piče!!',
			src: `${assets}/do-pice.mp3`,
		},
		{
			title: 'Hajzli jedni!',
			src: `${assets}/hajzli-jedni.mp3`,
		},
		{
			sfw: true,
			title: 'Toto je neuveřitelné!',
			src: `${assets}/hosi-to-je-neuveritelne.mp3`,
		},
        {
            sfw: false,
            title: 'Já se musím pojebat!',
            src: `${assets}/ja-se-z-toho-musim-pojebat.mp3`,
        },
        {
            sfw: false,
            title: 'Ja to mrdám!',
            src: `${assets}/ja-to-mrdam.mp3`,
        },
        {
            sfw: false,
            title: 'Jedinou pičovinku!',
            src: `${assets}/jedinou-picovinku.mp3`,
        },
        {
            sfw: false,
            title: 'Do piči s tadyma!',
            src: `${assets}/jedu-do-pici-stadyma.mp3`,
        },
        {
            sfw: false,
            title: 'Kurva!',
            src: `${assets}/kurva.mp3`,
        },
        {
            sfw: false,
            title: 'To není možné!!',
            src: `${assets}/kurva-do-pice-to-neni-mozne.mp3`,
        },
        {
            sfw: true,
            title: 'Nebudu to dělat!',
            src: `${assets}/nebudu-to-delat.mp3`,
        },
        {
            sfw: false,
            title: 'Past vedle pasti!',
            src:`${assets}/past-vedle-pasti-pico.mp3`,
        },
        {
            sfw: false,
            title: 'To je nemožné!',
src:`${assets}/to-je-pico-nemozne.mp3`,
        },
        {
            sfw: false,
            title: 'To není normální!',
src:`${assets}/to-neni-normalni-kurva.mp3`,
        },
        {
            sfw: false,
            title: 'Nervy ty pičo!',
src:`${assets}/to-sou-nervy-ty-pico.mp3`,
        },
        {
            sfw: false,
            title: 'Abys mohl toto!',
src:`${assets}/abych-mohl-toto.mp3`,
        },
        {
            sfw: true,
            title: 'Ani očko nenasadíš!',
src:`${assets}/ani-ocko-nenasadis.mp3`,
        },
        {
            sfw: true,
            title: 'Banální věc!',
src:`${assets}/banalni-vec.mp3`,
        },
        {
            sfw: true,
            title: 'Nejdu to dělat!',
src:`${assets}/ja-to-nejdu-delat.mp3`,
        },
        {
            sfw: false,
            title: 'Kurva už!',
src:`${assets}/kurva-uz.mp3`,
        },
        {
            sfw: false,
            title: 'Nenasadíš ho!',
src:`${assets}/ne-nenasadis-ho.mp3`,
        },
        {
            sfw: false,
            title: 'Největší blbec!',
src:`${assets}/nejvetsi-blbec-na-zemekouli.mp3`,
        },
        {
            sfw: false,
            title: 'Nenasadím!',
src:`${assets}/nenasadim.mp3`,
        },
        {
            sfw: true,
            title: 'Nerešitelný problém!',
src:`${assets}/neresitelny-problem-hosi.mp3`,
        },
        {
            sfw: true,
            title: 'Nevím jak!',
src:`${assets}/nevim-jak.mp3`,
        },
        {
            sfw: false,
            title: 'Zabít ty kurvy!',
src:`${assets}/okamzite-zabit-ty-kurvy.mp3`,
        },
        {
            sfw: true,
            title: 'Počkej kámo!',
src:`${assets}/pockej-kamo.mp3`,
        },
        {
            sfw: false,
            title: 'Všechno rozdělat!',
src:`${assets}/tady-musis-vsechno-rozdelat.mp3`,
        },
        {
            sfw: false,
            title: 'Tuto piču utáhnout!',
src:`${assets}/tuto-picu-potrebuju-utahnout.mp3`,
        },
        {
            sfw: false,
            title: 'Zasrané, zamrdané!',
src:`${assets}/zasrane-zamrdane.mp3`,
        },
	]

export const clips = readable(lakatosAll)

// stats
export const stats = writable(Object.fromEntries(lakatosAll.map((x, idx) => [idx, 0])))
