<script lang="ts">
	import Star, { type Props as StarProps } from './star.svelte';

	const starCount = 74;
	const stars: StarProps[] = $state([]);

	while (stars.length < starCount) {
		stars.push({
			brightness: Math.min(Math.random() + 0.3, 1),
			x: Math.round(Math.random() * 100),
			y: Math.round(Math.random() * 100),
			size: Math.random() * 10 + 2,
		});
	}
</script>

<div class="fixed -z-10 h-full w-full">
	{#each stars as star}
		<Star {...star} />
	{/each}
</div>
