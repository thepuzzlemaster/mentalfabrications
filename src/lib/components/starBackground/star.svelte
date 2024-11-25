<script lang="ts">
	import { cn } from '$lib/utils';

	export interface Props {
		brightness: number;
		x: number;
		y: number;
		size: number;
	}

	let { brightness, x, y, size }: Props = $props();
</script>

<div
	class={cn('absolute', 'rounded-full', 'bg-white transition-all')}
	style={`left: ${x}%; top: ${y}%; width: ${size}px; height: ${size}px; opacity: ${brightness};`}
></div>
