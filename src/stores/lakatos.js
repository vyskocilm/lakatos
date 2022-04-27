import { readable, writable } from 'svelte/store';

const baseUrl = `http://milujipraci.cz/sfx`

	const lakatosAll = [
		{
			title: 'Ani za kokot vole!',
			src: `${baseUrl}/ani-za-kokot-vole.mp3`,
		},
		{
			title: 'Do Piče!!',
			src: `${baseUrl}/do-pice.mp3`,
		},
		{
			title: 'Hajzli jedni!',
			src: `${baseUrl}/hajzli-jedni.mp3`,
		},
		{
			sfw: true,
			title: 'Toto je neuveřitelné!',
			src: `${baseUrl}/hosi-to-je-neuveritelne.mp3`,
		},
        {
            sfw: false,
            title: 'Já se musím pojebat!',
            src: `${baseUrl}/ja-se-z-toho-musim-pojebat.mp3`,
        },
        {
            sfw: false,
            title: 'Ja to mrdám!',
            src: `${baseUrl}/ja-to-mrdam.mp3`,
        },
        {
            sfw: false,
            title: 'Jedinou pičovinku!',
            src: `${baseUrl}/jedinou-picovinku.mp3`,
        },
        {
            sfw: false,
            title: 'Do piči s tadyma!',
            src: `${baseUrl}/jedu-do-pici-stadyma.mp3`,
        },
        {
            sfw: false,
            title: 'Kurva!',
            src: `${baseUrl}/kurva.mp3`,
        },
        {
            sfw: false,
            title: 'To není možné!!',
            src: `${baseUrl}/kurva-do-pice-to-neni-mozne.mp3`,
        },
        {
            sfw: true,
            title: 'Nebudu to dělat!',
            src: `${baseUrl}/nebudu-to-delat.mp3`,
        },
        {
            sfw: false,
            title: 'Past vedle pasti!',
            src:`${baseUrl}/past-vedle-pasti-pico.mp3`,
        },
        {
            sfw: false,
            title: 'To je nemožné!',
src:`${baseUrl}/to-je-pico-nemozne.mp3`,
        },
        {
            sfw: false,
            title: 'To není normální!',
src:`${baseUrl}/to-neni-normalni-kurva.mp3`,
        },
        {
            sfw: false,
            title: 'Nervy ty pičo!',
src:`${baseUrl}/to-sou-nervy-ty-pico.mp3`,
        },
        {
            sfw: false,
            title: 'Abys mohl toto!',
src:`${baseUrl}/extra/abych-mohl-toto.mp3`,
        },
        {
            sfw: true,
            title: 'Ani očko nenasadíš!',
src:`${baseUrl}/extra/ani-ocko-nenasadis.mp3`,
        },
        {
            sfw: true,
            title: 'Banální věc!',
src:`${baseUrl}/extra/banalni-vec.mp3`,
        },
        {
            sfw: true,
            title: 'Nejdu to dělat!',
src:`${baseUrl}/extra/ja-to-nejdu-delat.mp3`,
        },
        {
            sfw: false,
            title: 'Kurva už!',
src:`${baseUrl}/extra/kurva-uz.mp3`,
        },
        {
            sfw: false,
            title: 'Nenasadíš ho!',
src:`${baseUrl}/extra/ne-nenasadis-ho.mp3`,
        },
        {
            sfw: false,
            title: 'Největší blbec!',
src:`${baseUrl}/extra/nejvetsi-blbec-na-zemekouli.mp3`,
        },
        {
            sfw: false,
            title: 'Nenasadím!',
src:`${baseUrl}/extra/nenasadim.mp3`,
        },
        {
            sfw: true,
            title: 'Nerešitelný problém!',
src:`${baseUrl}/extra/neresitelny-problem-hosi.mp3`,
        },
        {
            sfw: true,
            title: 'Nevím jak!',
src:`${baseUrl}/extra/nevim-jak.mp3`,
        },
        {
            sfw: false,
            title: 'Zabít ty kurvy!',
src:`${baseUrl}/extra/okamzite-zabit-ty-kurvy.mp3`,
        },
        {
            sfw: true,
            title: 'Počkej kámo!',
src:`${baseUrl}/extra/pockej-kamo.mp3`,
        },
        {
            sfw: false,
            title: 'Všechno rozdělat!',
src:`${baseUrl}/extra/tady-musis-vsechno-rozdelat.mp3`,
        },
        {
            sfw: false,
            title: 'Tuto piču utáhnout!',
src:`${baseUrl}/extra/tuto-picu-potrebuju-utahnout.mp3`,
        },
        {
            sfw: false,
            title: 'Zasrané, zamrdané!',
src:`${baseUrl}/extra/zasrane-zamrdane.mp3`,
        },
	]

export const clips = readable(lakatosAll)
export const stats = writable(new Map(lakatosAll.map((x, idx) => [idx, 0])))
