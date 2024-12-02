<script lang="ts">
  import Link from '$lib/components/link.svelte';
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type $$props = HTMLAttributes<HTMLDivElement>;

  interface Props {
    class?: $$props['class'];
    content: Snippet;
    imageAlt: string;
    imageUrl: string;
    linkUrl?: string;
    noLinkText?: string;
    role?: Snippet;
    technologies?: string[];
    title: string;
  }

  const {
    class: className,
    content,
    imageAlt,
    imageUrl,
    linkUrl,
    noLinkText,
    role,
    technologies,
    title,
    ...restProps
  }: Props = $props();
</script>

<div class={cn(className)}>
  <div
    class={cn(
      'relative',
      'z-10',
      'rounded-lg',
      'max-w-4xl',
      'min-h-48',
      'mb-8',
      'p-8',
      'border-emerald-600',
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
      'after:bg-emerald-600',
      'after:content-[""])',
    )}
    {...restProps}
  >
    <div class="items-last-baseline flex justify-between gap-4">
      <h3 class="mb-4 text-3xl font-bold">{title}</h3>
      {#if linkUrl}
        <Link href={linkUrl} target="_blank">View project</Link>
      {/if}
      {#if noLinkText}
        <div class="font-light italic">{noLinkText}</div>
      {/if}
    </div>
    <div class="flex flex-col items-end gap-6 lg:flex-row">
      <div>{@render content()}</div>
      <img class="max-w-full rounded-lg object-contain sm:max-w-sm" alt={imageAlt} src={imageUrl} />
    </div>
    {#if technologies}
      <h4 class="mt-4 text-xl font-semibold">Technologies</h4>
      <ul class="flex flex-wrap">
        {#each technologies as technology}
          <li
            class="relative after:absolute after:-right-2.5 after:top-1/2 after:-mt-0.5 after:h-1 after:w-1 after:rounded-full after:bg-emerald-500 [&:last-child]:after:content-none [&:not(:last-child)]:mr-4 [&:not(:last-child)]:after:content-['']"
          >
            {technology}
          </li>
        {/each}
      </ul>
    {/if}
    <div>{@render role?.()}</div>
  </div>
</div>
