<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type $$props = HTMLAttributes<HTMLDivElement>;

  interface Props {
    className?: $$props['class'];
    content: Snippet;
    footer?: Snippet;
    title: string;
  }

  const { className, content, footer, title, ...restProps }: Props = $props();
</script>

<div
  class={cn(
    className,
    'relative',
    'z-10',
    'rounded-lg',
    'min-w-188',
    'max-w-4xl',
    'min-h-48',
    'p-8',
    'before:absolute',
    'before:inset-0',
    'before:rounded-lg',
    'before:bg-gray-800',
    'before:-z-10',
    'after:absolute',
    'after:-left-1',
    'after:top-1',
    'after:-z-20',
    'after:h-full',
    'after:w-full',
    'after:rounded-lg',
    'after:bg-emerald-700',
    'after:content-[""])',
  )}
  {...restProps}
>
  <div class="mb-4 text-3xl font-bold">{title}</div>
  <div>{@render content()}</div>
  <div>{@render footer?.()}</div>
</div>
