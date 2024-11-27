<script lang="ts">
  import { STAR_BLOCKER } from '$lib/styleClasses/starBlocker';
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  type $$Props = HTMLAnchorAttributes;

  interface Props {
    children: Snippet;
    className?: $$Props['class'];
    href: $$Props['href'];
  }

  let { children, className, href, ...restProps }: Props = $props();
</script>

<li class={cn(className)}>
  <a
    class={cn(
      STAR_BLOCKER,
      'rounded-md',
      'px-4',
      'py-2',
      'text-emerald-400',
      'hover:text-emerald-300',
      'focus-visible:outline-none',
      'focus-visible:ring-1',
      'focus-visible:ring-ring',
      'text-xl',
      'transition-colors',
    )}
    {href}
    {...restProps}
  >
    {@render children?.()}
  </a>
</li>
