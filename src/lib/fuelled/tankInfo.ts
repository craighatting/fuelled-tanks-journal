import type { Tank } from './journal';

export interface TankInfo {
	summary: string;
	considerations: string[];
}

export const TANK_INFO: Record<Tank, TankInfo> = {
	spiritual: {
		summary: 'Your connection with God — described in the series as a vine and branches: He\'s the source, we\'re the branches, and apart from Him we can\'t bear lasting fruit.',
		considerations: [
			'Obedience — the number one sign of real connection, not just a suggestion to take or leave',
			'Time alone with Him — His word, prayer, and actually listening, not just talking',
			'Time with His community — a relationship with the vine that isn\'t connected to any other branches doesn\'t match how it was designed',
			'Fruit — is love, joy, peace, patience and the rest actually increasing in your life, or fading?',
			'Posture — do you arrive at church or community leaning in, or waiting to be entertained?'
		]
	},
	emotional: {
		summary: 'A gift from God, not something to suppress or let run the show — three honest questions get you most of the way to processing it well.',
		considerations: [
			'What am I really feeling? — naming it is most of the way to processing it',
			'Why am I feeling like this? — most big reactions have a trigger smaller than the reaction itself',
			'What am I going to do with it? — pray it honestly, and process it fully rather than shortcutting the hard parts',
			'Remember your feelings are real, but not always reliable — a full night\'s sleep can change how something looks',
			'Grief is a valley to walk through, not skirt around — there\'s fruit in it you won\'t find on the rim'
		]
	},
	mental: {
		summary: 'The thoughts running in your head — the series frames this in three moves: transform your thinking, take captive what shouldn\'t be there, and train your mind toward what\'s good.',
		considerations: [
			'Transform — not a small tweak but real renewal (Romans 12:2), starting with acknowledging you need it',
			'Take captive — you have the authority to stop a stray thought before it gains momentum (2 Corinthians 10:5)',
			'Train — deliberately focus on what\'s true, noble, right, pure and praiseworthy (Philippians 4:8)',
			'Watch the three triggers — exhaustion, who you spend time with, and poor inputs (what you read, watch, scroll)',
			'New thought patterns feel effortful at first — like cutting a new path — until they become the default'
		]
	},
	physical: {
		summary: 'Your body — on loan to you, a temple of the Holy Spirit, and the one tank that takes every other tank down with it if it fails.',
		considerations: [
			'Eat healthily — not just eat; less processed, smaller portions, actually enjoyed',
			'Exercise regularly — not a guilt response, an act of gratitude for a body that can move',
			'Rest intentionally — sleep is one of the greatest gifts of life, not an afterthought',
			'Monitor your other tanks — a crushed spirit really does show up in the body',
			'Steward it, don\'t idolise it — your body serves your purpose, it isn\'t the purpose'
		]
	}
};
