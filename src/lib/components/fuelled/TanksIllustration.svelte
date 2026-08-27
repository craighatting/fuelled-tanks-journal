<script lang="ts">
	import { TANKS, TANK_LABELS } from '$lib/fuelled/journal';

	/** Optional fill level (0-100) per tank; defaults to a mostly-full illustrative state. */
	let { levels = { spiritual: 80, emotional: 80, mental: 80, physical: 80 } }: {
		levels?: Record<(typeof TANKS)[number], number>;
	} = $props();
</script>

<div class="grid grid-cols-4 gap-3 sm:gap-4">
	{#each TANKS as tank}
		<div class="flex flex-col items-center">
			<span class="mb-2 text-center text-[11px] font-semibold leading-tight text-on-surface sm:text-xs">
				{TANK_LABELS[tank]}
			</span>
			<span class="mb-1 text-on-surface-muted">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v9m0 0 3-3m-3 3-3-3M4.5 19.5h15" />
				</svg>
			</span>
			<div class="relative flex h-40 w-full overflow-hidden rounded-md border border-border-strong sm:h-48">
				<div class="absolute inset-0 flex flex-col">
					<div class="flex-1" style="background:#2f6690"></div>
					<div class="flex-1" style="background:#f4e04d"></div>
					<div class="flex-1" style="background:#e0402a"></div>
				</div>
				<div
					class="absolute inset-x-0 bottom-0 bg-surface-dim/90 transition-all"
					style="height: {100 - levels[tank]}%"
				></div>
			</div>
			<span class="mt-1 text-on-surface-muted">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v9m0 0 3-3m-3 3-3-3M4.5 19.5h15" />
				</svg>
			</span>
		</div>
	{/each}
</div>
