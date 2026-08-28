import type { Tank } from './journal';

export interface TankInfo {
	summary: string;
	considerations: string[];
}

export const TANK_INFO: Record<Tank, TankInfo> = {
	spiritual: {
		summary: 'Your connection with God — the cornerstone tank. The others can run on empty fumes without it, but not for long.',
		considerations: [
			'Prayer — are you actually talking with God, or just about Him?',
			'Scripture — reading it to hear from Him, not just to tick a box',
			'Worship — times you\'ve stopped to notice who God is',
			'Quiet — unhurried space where you can actually listen',
			'Obedience — the small, unglamorous steps of following through on what He\'s said'
		]
	},
	emotional: {
		summary: 'How you feel, and how well you notice, name and process it — separate from what you think.',
		considerations: [
			'Are you naming what you feel, or pushing it down?',
			'Grief and loss you haven\'t fully sat with',
			'Relationships where you feel truly known',
			'Joy, gratitude and things worth celebrating',
			'Whether you\'re reacting more strongly than the moment calls for'
		]
	},
	mental: {
		summary: 'The thoughts running in your head — your self-talk, your focus, and what you let take up space there.',
		considerations: [
			'What your inner dialogue sounds like on a hard day',
			'What you\'re reading, watching and listening to',
			'Decision fatigue — how many small calls you\'re making without a break',
			'Worry or rumination vs. genuine mental rest',
			'Whether you can concentrate, or your mind feels scattered'
		]
	},
	physical: {
		summary: 'Your body — sleep, food, movement and pace. The easiest tank to notice, and the easiest to ignore anyway.',
		considerations: [
			'Sleep — enough of it, and good quality',
			'Food and water — not just enough, but the right kind',
			'Movement — some form of it, regularly',
			'Pace — are you sprinting through weeks with no real rest?',
			'Physical symptoms — tension, fatigue, or pain that might be a signal'
		]
	}
};
