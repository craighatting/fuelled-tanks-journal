<script lang="ts">
	import { onMount } from 'svelte';
	import TankZonePicker from '$lib/components/fuelled/TankZonePicker.svelte';
	import TankNoteEditor from '$lib/components/fuelled/TankNoteEditor.svelte';
	import {
		TANKS,
		TANK_LABELS,
		getEntry,
		saveEntry,
		emptyEntry,
		listEntries,
		computeStreak,
		todayKey,
		lastNDates,
		formatDateLabel,
		zoneForLevel
	} from '$lib/fuelled/journal';
	import type { Tank, NoteTag, JournalEntry, Zone } from '$lib/fuelled/journal';

	const today = todayKey();
	const zoneColors: Record<Zone, string> = { burnout: '#e0402a', danger: '#f4e04d', healthy: '#2f6690' };

	let entry = $state<JournalEntry>(emptyEntry(today));
	let streak = $state(0);
	let history = $state<{ date: string; levels: JournalEntry['levels'] | null }[]>([]);
	let saved = $state(false);
	let ready = $state(false);

	function loadState() {
		const existing = getEntry(today);
		entry = existing ?? emptyEntry(today);
		saved = !!existing;
		const all = listEntries();
		streak = computeStreak(all);
		const byDate = Object.fromEntries(all.map((e) => [e.date, e]));
		history = lastNDates(7).map((date) => ({ date, levels: byDate[date]?.levels ?? null }));
		ready = true;
	}

	onMount(loadState);

	function setLevel(tank: Tank, level: number) {
		entry = { ...entry, levels: { ...entry.levels, [tank]: level } };
		saved = false;
	}

	function addNote(kind: 'filled' | 'drained', text: string, tag: NoteTag) {
		const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
		entry = { ...entry, [kind]: [...entry[kind], { id, text, tank: tag }] };
		saved = false;
	}

	function removeNote(kind: 'filled' | 'drained', id: string) {
		entry = { ...entry, [kind]: entry[kind].filter((n) => n.id !== id) };
		saved = false;
	}

	function save() {
		saveEntry(entry);
		saved = true;
		loadState();
	}
</script>

<svelte:head>
	<title>Tonight's Check-in — Fuelled</title>
</svelte:head>

{#if ready}
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-xl font-bold text-on-surface">Tonight's check-in</h1>
			<p class="text-sm text-on-surface-muted">{formatDateLabel(today)}</p>
		</div>
		{#if streak > 0}
			<div class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
				🔥 {streak} day{streak === 1 ? '' : 's'}
			</div>
		{/if}
	</div>

	<!-- 7-day strip -->
	<div class="mt-4 flex justify-between gap-1">
		{#each history as day}
			<div class="flex flex-1 flex-col items-center gap-1">
				<div class="flex h-8 w-full overflow-hidden rounded" class:opacity-30={!day.levels}>
					{#each TANKS as tank}
						{@const zone = day.levels ? zoneForLevel(day.levels[tank]) : null}
						<div class="flex-1" style="background:{zone ? zoneColors[zone] : 'var(--color-border)'}"></div>
					{/each}
				</div>
				<span class="text-[10px] text-on-surface-muted">{formatDateLabel(day.date).slice(0, 3)}</span>
			</div>
		{/each}
	</div>

	<!-- Tank pickers -->
	<div class="mt-6 flex flex-col gap-5">
		{#each TANKS as tank}
			<TankZonePicker
				label={TANK_LABELS[tank]}
				level={entry.levels[tank]}
				onSelect={(level) => setLevel(tank, level)}
			/>
		{/each}
	</div>

	<!-- Filled / drained -->
	<div class="mt-8 flex flex-col gap-6 pb-28">
		<TankNoteEditor
			heading="What filled your tanks today?"
			placeholder="e.g. good conversation with a friend"
			notes={entry.filled}
			onAdd={(text, tag) => addNote('filled', text, tag)}
			onRemove={(id) => removeNote('filled', id)}
		/>
		<TankNoteEditor
			heading="What drained your tanks today?"
			placeholder="e.g. back-to-back meetings"
			notes={entry.drained}
			onAdd={(text, tag) => addNote('drained', text, tag)}
			onRemove={(id) => removeNote('drained', id)}
		/>
	</div>

	<div class="fixed inset-x-0 bottom-16 z-20 mx-auto max-w-2xl px-4">
		<button
			type="button"
			onclick={save}
			class="w-full rounded-xl px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition {saved
				? 'bg-success'
				: 'bg-primary hover:bg-primary-dark'}"
		>
			{saved ? 'Saved ✓' : 'Save tonight\'s check-in'}
		</button>
	</div>
{/if}
