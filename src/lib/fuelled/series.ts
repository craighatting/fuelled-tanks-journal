export interface SeriesPart {
	number: number;
	title: string;
	tank: string;
	description: string;
	speaker?: string;
	youtubeUrl: string;
	/** Title/tank confirmed against a real source vs. inferred — flag it in the UI so it's easy to spot and fix. */
	confirmed: boolean;
	/** Cleaned-up transcript paragraphs, if one has been added for this part. */
	transcript?: string[];
}

/**
 * Parts 1-3 title/speaker are confirmed from CityHill Church's own series page
 * (found via search — cityhillchurch.tv itself wasn't fetchable from this
 * environment). Parts 4-6 are inferred by elimination (physical and spiritual
 * are already taken by parts 2-3, so 4-5 are most likely emotional/mental,
 * order unconfirmed) — replace with the real titles when you have them.
 */
export const seriesParts: SeriesPart[] = [
	{
		number: 1,
		title: 'Life To The Full',
		tank: 'Introduction',
		description: 'The four tanks, the greatest commandment, and why we run out of fuel.',
		speaker: 'Steve Wimble',
		youtubeUrl: 'https://www.youtube.com/watch?v=2mDsQuFcuho',
		confirmed: true
	},
	{
		number: 2,
		title: 'Give Attention To Your "Body Tank"',
		tank: 'Physical',
		description: 'Loving God with all your strength — rest, food, and the body.',
		speaker: 'Wayne Neuper',
		youtubeUrl: 'https://www.youtube.com/watch?v=Jq5Ys0hZ5Dg',
		confirmed: true
	},
	{
		number: 3,
		title: 'Love The Lord With All Your Soul',
		tank: 'Spiritual',
		description: 'The cornerstone tank — our connection with God.',
		youtubeUrl: 'https://www.youtube.com/watch?v=xowWS4-DB5w',
		confirmed: true
	},
	{
		number: 4,
		title: 'The Emotional Tank',
		tank: 'Emotional',
		description: 'Loving God with all your heart — feeling and processing well.',
		youtubeUrl: 'https://www.youtube.com/watch?v=Ml5YC7g8wgQ',
		confirmed: false
	},
	{
		number: 5,
		title: 'The Mental Tank',
		tank: 'Mental',
		description: 'Loving God with all your mind — thoughts, decisions, and belief.',
		youtubeUrl: 'https://www.youtube.com/watch?v=rxZXvSq41dY',
		confirmed: false
	},
	{
		number: 6,
		title: 'Living in the Healthy Zone',
		tank: 'Bringing it together',
		description: 'Reading the signals and making the healthy zone your address.',
		youtubeUrl: 'https://www.youtube.com/watch?v=DatPqPbC5HQ',
		confirmed: false
	}
];
