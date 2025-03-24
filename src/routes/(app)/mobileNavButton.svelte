<script lang="ts">
  import { cn } from '$lib/utils';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface Props extends HTMLButtonAttributes {
    'aria-controls': HTMLButtonAttributes['aria-controls'];
    isOpen: boolean;
    onButtonClick: () => void;
  }

  const { class: className, isOpen, onButtonClick, ...restProps }: Props = $props();
</script>

<button
  aria-expanded={isOpen}
  aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
  class={cn(
    className,
    'group',
    'flex',
    'flex-col',
    'justify-between',
    'min-h-6',
    'p-2',
    'box-content',
    'transition-transform',
    isOpen && 'translate-x-1.5',
  )}
  onclick={onButtonClick}
  {...restProps}
>
  <span
    class={cn(
      'w-7',
      'transition-all',
      'duration-200',
      'h-0.75',
      'bg-emerald-400',
      'group-hover:bg-emerald-300',
      'origin-top-left',
      isOpen && 'w-8 rotate-45',
    )}
  ></span>
  <span
    class={cn(
      'w-7',
      'transition-all',
      'duration-200',
      'h-0.75',
      'bg-emerald-400',
      'group-hover:bg-emerald-300',
      isOpen && 'opacity-0',
    )}
  ></span>
  <span
    class={cn(
      'w-7',
      'transition-all',
      'duration-200',
      'h-0.75',
      'bg-emerald-400',
      'group-hover:bg-emerald-300',
      'origin-bottom-left',
      isOpen && 'w-8 -rotate-45',
    )}
  ></span>
</button>
