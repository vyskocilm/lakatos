import { readable, writable } from 'svelte/store';

const baseUrl = `http://milujipraci.cz/sfx`

	const lakatosAll = [
		{
			title: 'Ani za kokot vole!',
			src: `${baseUrl}/ani-za-kokot-vole.mp3`,
		},
		{
			title: 'Do Pice!!',
			src: `${baseUrl}/do-pice.mp3`,
		},
		{
			title: 'Hajzli jedni!',
			src: `${baseUrl}/hajzli-jedni.mp3`,
		},
		{
			sfw: true,
			title: 'Toto je neuveritelne!',
			src: `${baseUrl}/hosi-to-je-neuveritelne.mp3`,
		},
        {
            sfw: false,
            title: 'Ja se z toho musim pojebat!',
            src: `${baseUrl}/ja-se-z-toho-musim-pojebat.mp3`,
        },
        {
            sfw: false,
            title: 'Ja to mrdam!',
            src: `${baseUrl}/ja-to-mrdam.mp3`,
        },
        {
            sfw: false,
            title: 'Jedinou picovinku!',
            src: `${baseUrl}/jedinou-picovinku.mp3`,
        },
        {
            sfw: false,
            title: 'Jedu do pici s tadyma!',
            src: `${baseUrl}/jedu-do-pici-stadyma.mp3`,
        },
        {
            sfw: false,
            title: 'Kurva!',
            src: `${baseUrl}/kurva.mp3`,
        },
        {
            sfw: false,
            title: 'Kurva do pice to neni mozne!!',
            src: `${baseUrl}/kurva-do-pice-to-neni-mozne.mp3`,
        },
        {
            sfw: true,
            title: 'Nebudu to delat!',
            src: `${baseUrl}/nebudu-to-delat.mp3`,
        },
        {
            src:`${baseUrl}/past-vedle-pasti-pico.mp3`,
        },
        {
src:`${baseUrl}/to-je-pico-nemozne.mp3`,
        },
        {
src:`${baseUrl}/to-neni-normalni-kurva.mp3`,
        },
        {
src:`${baseUrl}/to-sou-nervy-ty-pico.mp3`,
        },
        {
src:`${baseUrl}/extra/abych-mohl-toto.mp3`,
        },
        {
            sfw: true,
            title: 'Ani ocko nenasadis!',
src:`${baseUrl}/extra/ani-ocko-nenasadis.mp3`,
        },
        {
            sfw: true,
            title: 'Banalni vec!',
src:`${baseUrl}/extra/banalni-vec.mp3`,
        },
        {
            sfw: true,
            title: 'Ja to nejdu delat!',
src:`${baseUrl}/extra/ja-to-nejdu-delat.mp3`,
        },
        {
src:`${baseUrl}/extra/kurva-uz.mp3`,
        },
        {
            sfw: false,
            title: 'Ne, nenasadis ho!',
src:`${baseUrl}/extra/ne-nenasadis-ho.mp3`,
        },
        {
            sfw: false,
            title: 'Nejvetsi blbec!',
src:`${baseUrl}/extra/nejvetsi-blbec-na-zemekouli.mp3`,
        },
        {
            sfw: false,
            title: 'Nenasadim!',
src:`${baseUrl}/extra/nenasadim.mp3`,
        },
        {
            sfw: true,
            title: 'Neresitelny problem!',
src:`${baseUrl}/extra/neresitelny-problem-hosi.mp3`,
        },
        {
            sfw: true,
            title: 'Nevim jak!',
src:`${baseUrl}/extra/nevim-jak.mp3`,
        },
        {
src:`${baseUrl}/extra/okamzite-zabit-ty-kurvy.mp3`,
        },
        {
            sfw: true,
            title: 'Pockej kamo!',
src:`${baseUrl}/extra/pockej-kamo.mp3`,
        },
        {
            sfw: false,
            title: 'Vsechno rozdelat!',
src:`${baseUrl}/extra/tady-musis-vsechno-rozdelat.mp3`,
        },
        {
src:`${baseUrl}/extra/tuto-picu-potrebuju-utahnout.mp3`,
        },
        {
src:`${baseUrl}/extra/zasrane-zamrdane.mp3`,
        },
	]

export const clips = readable(lakatosAll)
export const stats = writable(new Map(lakatosAll.map((x, idx) => [idx, 0])))
