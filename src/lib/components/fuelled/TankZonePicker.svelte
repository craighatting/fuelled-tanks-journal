<script lang="ts">
	import { zoneForLevel, ZONE_LEVEL, ZONE_LABELS } from '$lib/fuelled/journal';
	import type { Zone } from '$lib/fuelled/journal';

	let { label, level, onSelect }: {
		label: string;
		level: number | null;
		onSelect: (level: number) => void;
	} = $props();

	const zones: Zone[] = ['burnout', 'danger', 'healthy'];
	const colors: Record<Zone, string> = { burnout: '#e0402a', danger: '#f4e04d', healthy: '#2f6690' };
	const textColors: Record<Zone, string> = { burnout: '#ffffff', danger: '#3a2f00', healthy: '#ffffff' };

	let current = $derived(zoneForLevel(level));
</script>

<div>
	<p class="mb-2 text-sm font-semibold text-on-surface">{label}</p>
	<div class="flex gap-2">
		{#each zones as zone}
			<button
				type="button"
				onclick={() => onSelect(ZONE_LEVEL[zone])}
				class="flex-1 rounded-lg border-2 py-3 text-xs font-semibold transition"
				style="
					background:{current === zone ? colors[zone] : 'transparent'};
					border-color:{colors[zone]};
					color:{current === zone ? textColors[zone] : 'var(--color-on-surface-muted)'};
				"
			>
				{ZONE_LABELS[zone]}
			</button>
		{/each}
	</div>
</div>
