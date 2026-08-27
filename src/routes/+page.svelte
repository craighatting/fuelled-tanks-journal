<script lang="ts">
	import TanksIllustration from '$lib/components/fuelled/TanksIllustration.svelte';
</script>

<section class="text-center">
	<h1 class="text-2xl font-bold text-on-surface sm:text-3xl">Track your four tanks</h1>
	<p class="mx-auto mt-2 max-w-md text-sm text-on-surface-muted sm:text-base">
		A resource from the <span class="font-medium text-on-surface">Fuelled</span> series — living in
		the healthy zone, spiritually, emotionally, mentally and physically.
	</p>
</section>

<section class="mt-8">
	<TanksIllustration />
</section>

<section class="mt-8 flex flex-col gap-3 sm:flex-row">
	<a
		href="/journal"
		class="flex-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
	>
		Start tonight's check-in
	</a>
	<a
		href="/series"
		class="flex-1 rounded-xl border border-border-strong bg-surface px-4 py-3 text-center text-sm font-semibold text-on-surface transition hover:bg-surface-dim"
	>
		Watch the series
	</a>
</section>

<section class="mt-10 rounded-xl border border-border bg-surface p-5">
	<h2 class="text-sm font-semibold uppercase tracking-wide text-primary">Where it comes from</h2>
	<blockquote class="mt-3 border-l-2 border-primary/30 pl-4 text-on-surface">
		<p class="italic">
			"Love the LORD your God with all your heart and with all your soul and with all your
			strength."
		</p>
		<footer class="mt-1 text-sm text-on-surface-muted">Deuteronomy 6:5</footer>
	</blockquote>
	<blockquote class="mt-4 border-l-2 border-primary/30 pl-4 text-on-surface">
		<p class="italic">
			"Love the Lord your God with all your heart and with all your soul and with all your
			strength and with all your mind."
		</p>
		<footer class="mt-1 text-sm text-on-surface-muted">Luke 10:27</footer>
	</blockquote>
	<p class="mt-4 text-sm leading-relaxed text-on-surface-muted">
		When Jesus was asked for the greatest commandment, He quoted Moses' words from
		Deuteronomy — and added one thing: <span class="font-medium text-on-surface">mind</span>.
		Heart, soul, strength and mind map onto four tanks inside us that need looking after:
		<span class="font-medium text-on-surface">emotional, spiritual, physical and mental</span>.
		Each tank has an inflow and an outflow — some things fill it, other things drain it — and
		they're designed to be used, not wrapped in cotton wool.
	</p>
</section>

<section class="mt-8 grid gap-3">
	<h2 class="text-sm font-semibold uppercase tracking-wide text-primary">The three zones</h2>

	<div class="rounded-xl border border-border bg-surface p-4">
		<div class="flex items-center gap-2">
			<span class="h-3 w-3 rounded-full" style="background:#2f6690"></span>
			<span class="font-semibold text-on-surface">Healthy zone</span>
		</div>
		<p class="mt-1 text-sm text-on-surface-muted">
			You respond better to tough situations, feel more gracious and kind, think more sharply,
			and feel more connected to God. This is where we were designed to live.
		</p>
	</div>

	<div class="rounded-xl border border-border bg-surface p-4">
		<div class="flex items-center gap-2">
			<span class="h-3 w-3 rounded-full" style="background:#f4e04d"></span>
			<span class="font-semibold text-on-surface">Danger zone</span>
		</div>
		<p class="mt-1 text-sm text-on-surface-muted">
			Exhausted, dysregulated emotions, more irritable, easily overwhelmed. If it becomes your
			address, it starts to feel normal.
		</p>
	</div>

	<div class="rounded-xl border border-border bg-surface p-4">
		<div class="flex items-center gap-2">
			<span class="h-3 w-3 rounded-full" style="background:#e0402a"></span>
			<span class="font-semibold text-on-surface">Burnout zone</span>
		</div>
		<p class="mt-1 text-sm text-on-surface-muted">
			Depleted over a long period. A good night's sleep won't fix it — it takes real
			intervention and a change in habits to climb back out.
		</p>
	</div>
</section>

<section class="mt-8 mb-4 rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-on-surface-muted">
	<p>
		<span class="font-medium text-on-surface">Tonight's check-in</span> takes about a minute:
		set where each tank sits right now, then jot down what filled your tanks today and what
		drained them. Do it most nights and the weekly report shows you the pattern.
	</p>
</section>
