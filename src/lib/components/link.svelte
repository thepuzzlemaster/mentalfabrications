<script lang="ts">
  import { cn } from '$lib/utils';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  type $$Props = HTMLAnchorAttributes;

  interface Props extends $$Props {
    className?: $$Props['class'];
  }

  const { children, className, ...restProps }: Props = $props();
</script>

<a
  class={cn(
    className,
    'text-emerald-300',
    'underline',
    'hover:text-emerald-400',
    'transition-colors',
  )}
  {...restProps}
>
  {@render children?.()}
</a>
