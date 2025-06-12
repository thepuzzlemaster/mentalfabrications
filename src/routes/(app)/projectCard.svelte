<script lang="ts">
  import Link from '$lib/components/link.svelte';
  import { H3 } from '$lib/styleClasses/typography';
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
  <div class={cn('relative', 'z-10', 'rounded-lg', 'min-h-48', 'mb-8', 'p-8')} {...restProps}>
    <div class="items-last-baseline flex justify-between gap-8">
      <h3 class={H3}>{title}</h3>
    </div>
    <div class="flex flex-col items-center gap-6 lg:flex-row">
      <div class="lg:w-1/2">
        <div>{@render content()}</div>
        {#if role}
          <div class="mt-4 font-bold">My role:</div>
          <div>{@render role()}</div>
        {/if}
        {#if technologies}
          <div class="mt-4 font-mono">
            <span class="font-bold">Technologies:</span>
            <ul class="m-0 inline p-0">
              {#each technologies as technology, index}
                <li class="inline-flex items-center">
                  {technology}
                  {#if index < technologies.length - 1}
                    <span class="mx-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-50"></span>
                  {/if}
                </li>
              {/each}
            </ul>
          </div>
        {/if}
        {#if linkUrl}
          <Link class="mt-4 inline-block" href={linkUrl} target="_blank">
            View project &gt;&gt;
          </Link>
        {/if}
        {#if noLinkText}
          <div class="mt-4 font-light italic">{noLinkText}</div>
        {/if}
      </div>
      <img class="max-w-full rounded-2xl object-cover lg:w-1/2" alt={imageAlt} src={imageUrl} />
    </div>
  </div>
</div>
