export type Tank = 'spiritual' | 'emotional' | 'mental' | 'physical';
export type Zone = 'healthy' | 'danger' | 'burnout';
export type NoteTag = Tank | 'general';

export const TANKS: Tank[] = ['spiritual', 'emotional', 'mental', 'physical'];

export const TANK_LABELS: Record<Tank, string> = {
	spiritual: 'Spiritual',
	emotional: 'Emotional',
	mental: 'Mental',
	physical: 'Physical'
};

export const NOTE_TAGS: NoteTag[] = [...TANKS, 'general'];

export const NOTE_TAG_LABELS: Record<NoteTag, string> = {
	...TANK_LABELS,
	general: 'General'
};

export const ZONE_LABELS: Record<Zone, string> = {
	healthy: 'Healthy',
	danger: 'Danger',
	burnout: 'Burnout'
};

/** Level each zone snaps to when picked via the tap picker. */
export const ZONE_LEVEL: Record<Zone, number> = {
	burnout: 15,
	danger: 50,
	healthy: 85
};

export interface TankNote {
	id: string;
	text: string;
	tank: NoteTag;
}

export interface JournalEntry {
	date: string; // YYYY-MM-DD, local
	levels: Record<Tank, number | null>; // 0-100, or null if not yet picked
	filled: TankNote[];
	drained: TankNote[];
	updatedAt: string; // ISO timestamp
}

const STORAGE_KEY = 'fuelled-journal';

function hasStorage(): boolean {
	try {
		return typeof localStorage !== 'undefined';
	} catch {
		return false;
	}
}

function readAll(): Record<string, JournalEntry> {
	if (!hasStorage()) return {};
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : {};
	} catch {
		return {};
	}
}

function writeAll(entries: Record<string, JournalEntry>) {
	if (!hasStorage()) return;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function todayKey(d: Date = new Date()): string {
	const y = d.getFullYear();
	const m = String(d.getMonth() + 1).padStart(2, '0');
	const day = String(d.getDate()).padStart(2, '0');
	return `${y}-${m}-${day}`;
}

export function formatDateLabel(dateKey: string): string {
	const [y, m, d] = dateKey.split('-').map(Number);
	return new Date(y, m - 1, d).toLocaleDateString(undefined, {
		weekday: 'short',
		day: 'numeric',
		month: 'short'
	});
}

export function emptyEntry(date: string): JournalEntry {
	return {
		date,
		levels: { spiritual: null, emotional: null, mental: null, physical: null },
		filled: [],
		drained: [],
		updatedAt: new Date().toISOString()
	};
}

export function getEntry(date: string): JournalEntry | null {
	return readAll()[date] ?? null;
}

export function saveEntry(entry: JournalEntry) {
	const all = readAll();
	all[entry.date] = { ...entry, updatedAt: new Date().toISOString() };
	writeAll(all);
}

export function listEntries(): JournalEntry[] {
	return Object.values(readAll()).sort((a, b) => a.date.localeCompare(b.date));
}

export function zoneForLevel(level: number | null): Zone | null {
	if (level === null) return null;
	if (level >= 67) return 'healthy';
	if (level >= 34) return 'danger';
	return 'burnout';
}

export function makeNoteId(): string {
	return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/** Consecutive days with a saved entry, counting back from today (or yesterday if today isn't logged yet). */
export function computeStreak(entries: JournalEntry[], reference: Date = new Date()): number {
	const dates = new Set(entries.map((e) => e.date));
	const cursor = new Date(reference);
	if (!dates.has(todayKey(cursor))) {
		cursor.setDate(cursor.getDate() - 1);
	}
	let streak = 0;
	while (dates.has(todayKey(cursor))) {
		streak++;
		cursor.setDate(cursor.getDate() - 1);
	}
	return streak;
}

/** The Monday-Sunday week containing `reference`, as an array of 7 date keys. */
export function weekDates(reference: Date = new Date()): string[] {
	const d = new Date(reference);
	const mondayOffset = (d.getDay() + 6) % 7; // 0 = Monday
	d.setDate(d.getDate() - mondayOffset);
	const dates: string[] = [];
	for (let i = 0; i < 7; i++) {
		const dd = new Date(d);
		dd.setDate(d.getDate() + i);
		dates.push(todayKey(dd));
	}
	return dates;
}

export function shiftWeek(reference: Date, weeks: number): Date {
	const d = new Date(reference);
	d.setDate(d.getDate() + weeks * 7);
	return d;
}

/** Last 7 calendar days (today included, for the compact history strip). */
export function lastNDates(n: number, reference: Date = new Date()): string[] {
	const dates: string[] = [];
	for (let i = n - 1; i >= 0; i--) {
		const dd = new Date(reference);
		dd.setDate(reference.getDate() - i);
		dates.push(todayKey(dd));
	}
	return dates;
}

export interface TankWeekSummary {
	tank: Tank;
	average: number | null;
	daysLogged: number;
	zoneDays: Record<Zone, number>;
}

export interface WeekReport {
	dates: string[];
	entriesByDate: Record<string, JournalEntry | undefined>;
	tanks: Record<Tank, TankWeekSummary>;
	filledByTank: Record<NoteTag, TankNote[]>;
	drainedByTank: Record<NoteTag, TankNote[]>;
	strongestTank: Tank | null;
	lowestTank: Tank | null;
}

export function summarizeWeek(dates: string[], allEntries: JournalEntry[]): WeekReport {
	const dateSet = new Set(dates);
	const entriesByDate: Record<string, JournalEntry | undefined> = {};
	for (const e of allEntries) {
		if (dateSet.has(e.date)) entriesByDate[e.date] = e;
	}
	const weekEntries = dates.map((d) => entriesByDate[d]).filter((e): e is JournalEntry => !!e);

	const tanks = {} as Record<Tank, TankWeekSummary>;
	for (const tank of TANKS) {
		const levels = weekEntries
			.map((e) => e.levels[tank])
			.filter((l): l is number => l !== null);
		const zoneDays: Record<Zone, number> = { healthy: 0, danger: 0, burnout: 0 };
		for (const level of levels) zoneDays[zoneForLevel(level)!]++;
		tanks[tank] = {
			tank,
			average: levels.length ? levels.reduce((a, b) => a + b, 0) / levels.length : null,
			daysLogged: levels.length,
			zoneDays
		};
	}

	const filledByTank: Record<NoteTag, TankNote[]> = {
		spiritual: [],
		emotional: [],
		mental: [],
		physical: [],
		general: []
	};
	const drainedByTank: Record<NoteTag, TankNote[]> = {
		spiritual: [],
		emotional: [],
		mental: [],
		physical: [],
		general: []
	};
	for (const e of weekEntries) {
		for (const note of e.filled) filledByTank[note.tank].push(note);
		for (const note of e.drained) drainedByTank[note.tank].push(note);
	}

	const withAverage = TANKS.filter((t) => tanks[t].average !== null);
	const strongestTank = withAverage.length
		? withAverage.reduce((a, b) => (tanks[a].average! >= tanks[b].average! ? a : b))
		: null;
	const lowestTank = withAverage.length
		? withAverage.reduce((a, b) => (tanks[a].average! <= tanks[b].average! ? a : b))
		: null;

	return { dates, entriesByDate, tanks, filledByTank, drainedByTank, strongestTank, lowestTank };
}
