import type { Colour, ColourInfo } from '../types/Colours';
import { Colour as ColourEnum } from '../types/Colours';

export const COLOURS: {
	[key in Colour]: ColourInfo;
} = {
	blue: {
		colour: '#85A6D7',
		background: 'linear-gradient(-63.502deg, #000000 0%, #143356 100%)',
		overlay: 'rgba(33, 122, 255, 0.1)',
		overall: ColourEnum.blue
	},
	green: {
		colour: '#85D7A6',
		background: 'linear-gradient(-60.974deg, #000000 0%, #1A5A0F 100%)',
		overlay: 'rgba(33, 122, 255, 0.1)',
		overall: ColourEnum.green
	},
	red: {
		colour: '#D78585',
		background: 'linear-gradient(-60.974deg, #000000 0%, #5A0F0F 100%);',
		overlay: 'rgba(33, 122, 255, 0.1)',
		overall: ColourEnum.red
	},
	yellow: {
		colour: '#D7D785',
		background: 'linear-gradient(-60.974deg, #000000 0%, #585A0F 100%);',
		overlay: 'rgba(33, 122, 255, 0.1)',
		overall: ColourEnum.yellow
	},
	purple: {
		colour: '#D785D7',
		background: 'linear-gradient(-60.974deg, #000000 0%, #4B0F5A 100%);',
		overlay: 'rgba(33, 122, 255, 0.1)',
		overall: ColourEnum.purple
	}
};