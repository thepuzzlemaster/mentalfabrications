<script lang="ts">
  import { STAR_BLOCKER } from '$lib/styleClasses/starBlocker';
  import { H3 } from '$lib/styleClasses/typography';
  import { cn } from '$lib/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  type $$props = HTMLAttributes<HTMLDivElement>;

  interface Props {
    class?: $$props['class'];
    quote: string;
    name: string;
    role: string;
    company: string;
  }

  const { class: className, quote, name, role, company, ...restProps }: Props = $props();
</script>

<div class={cn(className, STAR_BLOCKER, '~px-12/36')} {...restProps}>
  <h3 class={H3}>{quote}</h3>
  <div>{name} // {role} // {company}</div>
</div>
