<script lang="ts">
  import { cn } from '$lib/utils';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes {}

  const { children, class: className, ...restProps }: Props = $props();
</script>

<a
  class={cn(
    className,
    'text-emerald-300',
    'leading-snug',
    'hover:text-emerald-400',
    'transition-colors',
  )}
  {...restProps}
>
  {@render children?.()}
</a>
