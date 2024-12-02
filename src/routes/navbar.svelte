<script lang="ts">
  import { STAR_BLOCKER } from '$lib/styleClasses/starBlocker';
  import { cn } from '$lib/utils';
  import MobileNavButton from './mobileNavButton.svelte';
  import NavLink from './navLink.svelte';

  let isOpen = $state(false);
  const menuId = 'mainMenu';

  const toggleIsOpen = (newIsOpen?: boolean) => {
    isOpen = newIsOpen !== undefined ? newIsOpen : !isOpen;
  };

  const onButtonClick = () => {
    isOpen = !isOpen;
  };
</script>

<nav aria-label="main menu" class="fixed right-0 top-0 z-30 flex w-full flex-col items-end pt-2">
  <MobileNavButton
    aria-controls={menuId}
    class={cn(STAR_BLOCKER, 'z-10 mr-4 mt-2 md:hidden')}
    {isOpen}
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
      isOpen ? 'animate-in' : 'animate-out',
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
    <NavLink onclick={() => (isOpen = false)} href="#home">Home</NavLink>
    <NavLink onclick={() => (isOpen = false)} href="#about-me">About me</NavLink>
    <NavLink onclick={() => (isOpen = false)} href="#skills">Skills</NavLink>
    <NavLink onclick={() => (isOpen = false)} href="#projects">Projects</NavLink>
    <NavLink onclick={() => (isOpen = false)} href="#contact">Contact</NavLink>
    <NavLink onclick={() => (isOpen = false)} href="#art">Art</NavLink>
  </ul>
</nav>
