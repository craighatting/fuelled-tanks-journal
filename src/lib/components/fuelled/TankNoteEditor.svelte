<script lang="ts">
	import { NOTE_TAGS, NOTE_TAG_LABELS } from '$lib/fuelled/journal';
	import type { TankNote, NoteTag } from '$lib/fuelled/journal';

	let { heading, placeholder, notes, onAdd, onRemove }: {
		heading: string;
		placeholder: string;
		notes: TankNote[];
		onAdd: (text: string, tag: NoteTag) => void;
		onRemove: (id: string) => void;
	} = $props();

	let text = $state('');
	let tag = $state<NoteTag>('general');

	function submit() {
		const trimmed = text.trim();
		if (!trimmed) return;
		onAdd(trimmed, tag);
		text = '';
	}
</script>

<div>
	<p class="mb-2 text-sm font-semibold text-on-surface">{heading}</p>

	{#if notes.length}
		<ul class="mb-3 flex flex-col gap-2">
			{#each notes as note (note.id)}
				<li class="flex items-center justify-between gap-2 rounded-lg border border-border bg-surface-dim px-3 py-2 text-sm">
					<span class="min-w-0 break-words">
						<span class="mr-1.5 inline-block rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
							{NOTE_TAG_LABELS[note.tank]}
						</span>
						<span class="text-on-surface">{note.text}</span>
					</span>
					<button
						type="button"
						onclick={() => onRemove(note.id)}
						class="shrink-0 text-on-surface-muted hover:text-danger"
						aria-label="Remove note"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					</button>
				</li>
			{/each}
		</ul>
	{/if}

	<div class="flex flex-wrap gap-2">
		<input
			type="text"
			bind:value={text}
			{placeholder}
			onkeydown={(e) => {
				if (e.key === 'Enter') {
					e.preventDefault();
					submit();
				}
			}}
			class="min-w-0 flex-1 basis-40 rounded-lg border border-border-strong bg-surface px-3 py-2 text-sm text-on-surface"
		/>
		<select bind:value={tag} class="rounded-lg border border-border-strong bg-surface px-2 py-2 text-sm text-on-surface">
			{#each NOTE_TAGS as t}
				<option value={t}>{NOTE_TAG_LABELS[t]}</option>
			{/each}
		</select>
		<button
			type="button"
			onclick={submit}
			class="shrink-0 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"
		>
			Add
		</button>
	</div>
</div>
