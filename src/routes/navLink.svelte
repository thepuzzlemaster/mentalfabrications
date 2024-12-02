<script lang="ts">
  import { STAR_BLOCKER } from '$lib/styleClasses/starBlocker';
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes {
    children: Snippet;
    href: HTMLAnchorAttributes['href'];
  }

  let { children, class: className, href, ...restProps }: Props = $props();
</script>

<li class={cn(className, 'flex w-full md:w-auto')}>
  <a
    class={cn(
      STAR_BLOCKER,
      'rounded-md',
      'px-4',
      'py-1',
      'text-emerald-400',
      'hover:text-emerald-300',
      'focus-visible:outline-none',
      'focus-visible:ring-1',
      'focus-visible:ring-ring',
      'text-xl',
      'transition-colors',
      'w-full',
    )}
    {href}
    {...restProps}
  >
    {@render children?.()}
  </a>
</li>
