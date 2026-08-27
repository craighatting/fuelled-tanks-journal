<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let { children } = $props();

	const navItems = [
		{ href: `${base}/`, key: '/', label: 'Home', match: '/', exact: true },
		{ href: `${base}/series`, key: '/series', label: 'Series', match: '/series' },
		{ href: `${base}/journal`, key: '/journal', label: 'Journal', match: '/journal', exact: true },
		{ href: `${base}/journal/report`, key: '/journal/report', label: 'Report', match: '/journal/report' }
	];

	function isActive(item: (typeof navItems)[number]): boolean {
		const path = $page.url.pathname.slice(base.length) || '/';
		return item.exact ? path === item.match : path.startsWith(item.match);
	}

	const ICONS: Record<string, string> = {
		'/': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" /></svg>`,
		'/series': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m10.5 8.25 6 3.75-6 3.75V8.25Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
		'/journal': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>`,
		'/journal/report': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>`
	};
</script>

<svelte:head>
	<title>Fuelled — Track Your Four Tanks</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-surface-dim">
	<header class="sticky top-0 z-30 border-b border-border bg-surface px-4 py-3">
		<a href="{base}/" class="flex items-center gap-2.5">
			<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">
				F
			</div>
			<span class="font-semibold text-on-surface">Fuelled</span>
		</a>
	</header>

	<main class="mx-auto w-full max-w-2xl flex-1 px-4 pb-24 pt-6">
		{@render children()}
	</main>

	<nav class="fixed bottom-0 left-0 right-0 z-30 flex border-t border-border bg-surface safe-bottom">
		{#each navItems as item}
			<a
				href={item.href}
				class="flex flex-1 flex-col items-center gap-0.5 py-2 text-xs transition {isActive(item)
					? 'text-primary'
					: 'text-on-surface-muted'}"
			>
				<span class="h-6 w-6">{@html ICONS[item.key]}</span>
				{item.label}
			</a>
		{/each}
	</nav>
</div>

<style>
	.safe-bottom {
		padding-bottom: env(safe-area-inset-bottom, 0);
	}
</style>
