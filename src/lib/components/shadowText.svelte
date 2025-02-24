<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLElement>;

  interface Props {
    children: Snippet;
    class?: $$Props['class'];
    noShadowChildren?: Snippet;
    shadowClassName?: $$Props['class'];
    tag: string;
  }

  let {
    children,
    class: className,
    noShadowChildren,
    shadowClassName,
    tag,
    ...restProps
  }: Props = $props();
</script>

<svelte:element this={tag} {...restProps} class={cn(className, 'relative', 'z-10')}>
  {@render children()}{@render noShadowChildren?.()}
  <!-- prettier-ignore -->
  <span
    aria-hidden="true"
    class={cn(
      className,
      'absolute',
      '-left-0.5',
      'top-0.5',
      'text-emerald-400',
      'w-full',
      'h-full',
      '-z-10',
      shadowClassName,
    )}
  >{@render children()}<span class="opacity-0">{@render noShadowChildren?.()}</span></span>
</svelte:element>
