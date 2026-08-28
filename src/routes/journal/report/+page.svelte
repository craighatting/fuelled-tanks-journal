<script lang="ts">
	import { onMount } from 'svelte';
	import {
		TANKS,
		TANK_LABELS,
		listEntries,
		weekDates,
		shiftWeek,
		summarizeWeek,
		formatDateLabel,
		zoneForLevel
	} from '$lib/fuelled/journal';
	import type { Tank, Zone, WeekReport } from '$lib/fuelled/journal';

	const zoneColors: Record<Zone, string> = { burnout: '#e0402a', danger: '#f4e04d', healthy: '#2f6690' };

	let reference = $state(new Date());
	let report = $state<WeekReport | null>(null);
	let ready = $state(false);

	function load() {
		const dates = weekDates(reference);
		report = summarizeWeek(dates, listEntries());
		ready = true;
	}

	onMount(load);

	function goto(weeks: number) {
		reference = shiftWeek(reference, weeks);
		load();
	}

	function isCurrentWeek(): boolean {
		return weekDates(reference)[0] === weekDates(new Date())[0];
	}

	function tankNotes(tank: Tank) {
		if (!report) return { filled: [], drained: [] };
		return { filled: report.filledByTank[tank], drained: report.drainedByTank[tank] };
	}
</script>

<svelte:head>
	<title>Weekly Report — Fuelled</title>
</svelte:head>

{#if ready && report}
	<div class="flex items-center justify-between">
		<h1 class="text-xl font-bold text-on-surface">Weekly report</h1>
		<div class="flex items-center gap-1">
			<button
				type="button"
				onclick={() => goto(-1)}
				class="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-on-surface-muted hover:bg-surface-dim"
				aria-label="Previous week"
			>
				‹
			</button>
			<button
				type="button"
				onclick={() => goto(1)}
				disabled={isCurrentWeek()}
				class="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-on-surface-muted hover:bg-surface-dim disabled:opacity-30"
				aria-label="Next week"
			>
				›
			</button>
		</div>
	</div>
	<p class="mt-1 text-sm text-on-surface-muted">
		{formatDateLabel(report.dates[0])} – {formatDateLabel(report.dates[6])}
	</p>

	{#if report.lowestTank}
		<div class="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-on-surface">
			<span class="font-semibold text-primary">This week: </span>
			{#if report.strongestTank}
				your <span class="font-medium">{TANK_LABELS[report.strongestTank]}</span> tank was your strongest
			{/if}
			{#if report.strongestTank && report.lowestTank !== report.strongestTank}
				— your <span class="font-medium">{TANK_LABELS[report.lowestTank]}</span> tank was your
				lowest, with {report.tanks[report.lowestTank].zoneDays.danger + report.tanks[report.lowestTank].zoneDays.burnout}
				day{report.tanks[report.lowestTank].zoneDays.danger + report.tanks[report.lowestTank].zoneDays.burnout === 1 ? '' : 's'}
				outside the healthy zone. Worth a look at what's driving that.
			{/if}
		</div>
	{:else}
		<div class="mt-5 rounded-xl border border-border bg-surface p-4 text-sm text-on-surface-muted">
			No check-ins logged this week yet.
		</div>
	{/if}

	<div class="mt-6 flex flex-col gap-5">
		{#each TANKS as tank}
			{@const summary = report.tanks[tank]}
			{@const notes = tankNotes(tank)}
			<div class="rounded-xl border border-border bg-surface p-4">
				<div class="flex items-center justify-between">
					<h2 class="font-semibold text-on-surface">{TANK_LABELS[tank]}</h2>
					<span class="text-sm text-on-surface-muted">
						{summary.average !== null ? `${Math.round(summary.average)}% avg` : 'no data'}
					</span>
				</div>

				<div class="mt-3 flex items-end gap-1.5" style="height: 56px">
					{#each report.dates as date, i}
						{@const entry = report.entriesByDate[date]}
						{@const level = entry?.levels[tank]}
						<div class="flex flex-1 flex-col items-center justify-end gap-1" style="height: 100%">
							{#if level !== undefined && level !== null}
								<div
									class="w-full rounded-sm"
									style="height: {Math.max(level, 6)}%; background:{zoneColors[zoneForLevel(level)!]}"
								></div>
							{:else}
								<div class="h-1 w-full rounded-sm bg-border"></div>
							{/if}
						</div>
					{/each}
				</div>
				<div class="mt-1 flex gap-1.5">
					{#each report.dates as date}
						<span class="flex-1 text-center text-[10px] text-on-surface-muted">
							{formatDateLabel(date).slice(0, 3)}
						</span>
					{/each}
				</div>

				{#if summary.daysLogged > 0}
					<p class="mt-2 text-xs text-on-surface-muted">
						{summary.zoneDays.healthy} healthy · {summary.zoneDays.danger} danger · {summary.zoneDays.burnout} burnout
					</p>
				{/if}

				{#if notes.filled.length}
					<div class="mt-3">
						<p class="text-xs font-semibold text-success">Filled it</p>
						<ul class="mt-1 flex flex-col gap-1 text-sm text-on-surface">
							{#each notes.filled as note}
								<li>+ {note.text}</li>
							{/each}
						</ul>
					</div>
				{/if}
				{#if notes.drained.length}
					<div class="mt-3">
						<p class="text-xs font-semibold text-danger">Drained it</p>
						<ul class="mt-1 flex flex-col gap-1 text-sm text-on-surface">
							{#each notes.drained as note}
								<li>− {note.text}</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		{/each}

		{#if report.filledByTank.general.length || report.drainedByTank.general.length}
			<div class="rounded-xl border border-border bg-surface p-4">
				<h2 class="font-semibold text-on-surface">General</h2>
				{#if report.filledByTank.general.length}
					<div class="mt-3">
						<p class="text-xs font-semibold text-success">Filled it</p>
						<ul class="mt-1 flex flex-col gap-1 text-sm text-on-surface">
							{#each report.filledByTank.general as note}
								<li>+ {note.text}</li>
							{/each}
						</ul>
					</div>
				{/if}
				{#if report.drainedByTank.general.length}
					<div class="mt-3">
						<p class="text-xs font-semibold text-danger">Drained it</p>
						<ul class="mt-1 flex flex-col gap-1 text-sm text-on-surface">
							{#each report.drainedByTank.general as note}
								<li>− {note.text}</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		{/if}
	</div>
{/if}
