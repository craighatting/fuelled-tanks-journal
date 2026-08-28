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
		<div class="rounded-xl border border-border bg-surface p-4">
			<a
				href={part.youtubeUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-start gap-3"
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

			<details class="group mt-3 border-t border-border pt-3">
				<summary class="flex cursor-pointer list-none items-center gap-1.5 text-sm font-medium text-primary">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 transition group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
					</svg>
					Read the transcript
				</summary>
				{#if part.transcript?.length}
					<div class="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-on-surface-muted">
						{#each part.transcript as paragraph}
							<p>{paragraph}</p>
						{/each}
					</div>
				{:else}
					<p class="mt-3 text-sm text-on-surface-muted">
						Transcript not added yet — check back soon, or watch on YouTube above.
					</p>
				{/if}
			</details>
		</div>
	{/each}
</div>

<p class="mt-6 text-center text-xs text-on-surface-muted">
	Full series also available at
	<a href="https://cityhillchurch.tv/fuelled/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
		cityhillchurch.tv/fuelled
	</a>
</p>
