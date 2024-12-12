<script lang="ts">
  import { STAR_BLOCKER } from '$lib/styleClasses/starBlocker';
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
  import { fade } from 'svelte/transition';

  type Props = {
    children: Snippet;
    size?: 'sm';
  } & (
    | ({
        href: HTMLAnchorAttributes['href'];
      } & HTMLAnchorAttributes)
    | ({
        href?: never;
      } & HTMLButtonAttributes)
  );

  let { children, class: className, href, size, ...restProps }: Props = $props();
  let isAnchor = !!href;
  let Component: 'a' | 'button' = isAnchor ? 'a' : 'button';
</script>

<li
  out:fade={{ duration: 200 }}
  in:fade={{ delay: 250 }}
  class={cn('flex w-full content-end md:w-auto', className)}
>
  <svelte:element
    this={Component}
    class={cn(
      STAR_BLOCKER,
      'rounded-md',
      'px-4',
      'py-1',
      'text-emerald-400',
      'hover:text-emerald-300',
      'focus-visible:outline-none',
      'focus-visible:ring',
      'focus-visible:ring-ring',
      size ? 'text-xl' : 'text-2xl',
      'transition-colors',
      'w-full',
    )}
    {href}
    {...restProps}
  >
    {@render children?.()}
  </svelte:element>
</li>
