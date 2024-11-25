<script lang="ts">
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
      'rounded-md',
      'px-4',
      'py-2',
      'text-emerald-500',
      'hover:text-emerald-400',
      'focus-visible:outline-none',
      'focus-visible:ring-1',
      'focus-visible:ring-ring',
      'text-lg',
      'transition-colors',
    )}
    {href}
    {...restProps}
  >
    {@render children?.()}
  </a>
</li>
