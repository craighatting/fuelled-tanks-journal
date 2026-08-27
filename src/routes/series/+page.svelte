<script lang="ts">
	import { seriesParts } from '$lib/fuelled/series';
</script>

<svelte:head>
	<title>Watch the Series — Fuelled</title>
</svelte:head>

<h1 class="text-xl font-bold text-on-surface">The Fuelled series</h1>
<p class="mt-1 text-sm text-on-surface-muted">Six parts on living in the healthy zone.</p>

<div class="mt-6 flex flex-col gap-3">
	{#each seriesParts as part}
		<a
			href={part.youtubeUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 transition hover:border-primary/40"
		>
			<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
				{part.number}
			</div>
			<div class="min-w-0 flex-1">
				<div class="flex items-center gap-2">
					<span class="text-[11px] font-semibold uppercase tracking-wide text-primary">{part.tank}</span>
					{#if !part.confirmed}
						<span class="rounded-full bg-warning/10 px-1.5 py-0.5 text-[10px] font-medium text-warning">
							title unconfirmed
						</span>
					{/if}
				</div>
				<h2 class="mt-0.5 font-semibold text-on-surface">{part.title}</h2>
				<p class="mt-0.5 text-sm text-on-surface-muted">{part.description}</p>
				{#if part.speaker}
					<p class="mt-1 text-xs text-on-surface-muted">Speaker: {part.speaker}</p>
				{/if}
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" class="mt-1 h-5 w-5 shrink-0 text-on-surface-muted" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25M22 12H2.75" />
			</svg>
		</a>
	{/each}
</div>

<p class="mt-6 text-center text-xs text-on-surface-muted">
	Full series also available at
	<a href="https://cityhillchurch.tv/fuelled/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
		cityhillchurch.tv/fuelled
	</a>
</p>
