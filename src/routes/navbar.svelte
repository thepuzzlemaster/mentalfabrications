<script lang="ts">
  import { base } from '$app/paths';
  import { Label } from '$lib/components/ui/label';
  import { Switch } from '$lib/components/ui/switch';
  import { getAnimationContext } from '$lib/shared/animationContext';
  import { STAR_BLOCKER } from '$lib/styleClasses/starBlocker';
  import { cn } from '$lib/utils';
  import MobileNavButton from './mobileNavButton.svelte';
  import NavLink from './navLink.svelte';

  let clickCount$ = $state(0);
  let isOpen$ = $state(false);
  const menuId = 'mainMenu';

  const onButtonClick = () => {
    isOpen$ = !isOpen$;
  };

  let allowAnimationContext$ = getAnimationContext();
  let shouldShowClickButton$ = $state(true);

  const resetStars = () => {
    allowAnimationContext$.shouldResetStars = true;
  };

  $effect(() => {
    if (allowAnimationContext$.shootingStarCount > 20 || clickCount$ >= 3) {
      shouldShowClickButton$ = false;
    }
  });
</script>

<nav aria-label="main menu" class="fixed right-0 top-0 z-30 flex w-full justify-between pt-2">
  <div class={cn(STAR_BLOCKER, 'ml-4 flex items-center space-x-2')}>
    <Label for="motion">Motion</Label>
    <Switch
      checked={allowAnimationContext$.allowAnimation}
      controlledChecked
      id="motion"
      onCheckedChange={() => {
        allowAnimationContext$.allowAnimation = !allowAnimationContext$.allowAnimation;
      }}
    />
  </div>
  <MobileNavButton
    aria-controls={menuId}
    class={cn(STAR_BLOCKER, 'z-10 mr-4 mt-2 md:hidden')}
    isOpen={isOpen$}
    {onButtonClick}
  />
  <ul
    class={cn(
      'w-full',
      'absolute',
      'pt-12',
      'pb-4',
      'top-0',
      'bg-gray-900',
      isOpen$ ? 'animate-in' : 'animate-out',
      'fill-mode-forwards',
      'duration-300',
      'slide-in-from-top-full',
      'slide-out-to-top-full',

      'md:animate-none',
      'md:static',
      'md:flex',
      'md:justify-end',
      'md:py-0',
      'md:px-4',
      'md:w-auto',
      'md:bg-transparent',
    )}
    id={menuId}
  >
    {#if allowAnimationContext$.shootingStarCount >= 20}
      <NavLink size="sm" class="mr-8 hidden md:block" href={undefined} onclick={resetStars}>
        Reset stars
      </NavLink>
    {/if}
    {#if shouldShowClickButton$}
      <NavLink
        size="sm"
        class="mr-8 hidden md:block"
        href={undefined}
        onclick={() => clickCount$++}
      >
        Click Me!
      </NavLink>
    {/if}
    <NavLink onclick={() => (isOpen$ = false)} href={`${base}/#about-me`}>About</NavLink>
    <NavLink onclick={() => (isOpen$ = false)} href={`${base}/#projects`}>Projects</NavLink>
    <NavLink target="_blank" onclick={() => (isOpen$ = false)} href={`${base}/resume`}>
      Résumé
    </NavLink>
    <NavLink onclick={() => (isOpen$ = false)} href={`${base}/#contact`}>Contact</NavLink>
    <!-- <NavLink onclick={() => (isOpen = false)} href="#art">Art</NavLink> -->
  </ul>
</nav>
