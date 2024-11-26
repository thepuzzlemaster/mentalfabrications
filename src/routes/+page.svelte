<script lang="ts">
  import iLanPhoto from '$lib/assets/images/me-seattle-2.webp';
  import StarBackground from '$lib/components/starBackground/starBackground.svelte';
  import { cn } from '$lib/utils';
</script>

<StarBackground />
<section class="opacity-0" id="home">
  <div class="flex content-center items-center">
    <img
      alt="iLan standing in front of water at night, with a city skyline behind him in the distance."
      class="max-w-96 rounded-full"
      src={iLanPhoto}
    />
    <div class="ml-12 flex-col">
      <div
        data-after="iLan Epstein"
        class={cn(
          'text-6xl',
          'text-emerald-500',
          'after:content-[attr(data-after)]',
          'after:text-6xl',
          'relative',
          'z-20',
          'after:text-emerald-100',
          'after:absolute',
          'after:bottom-0.5',
          'after:left-0.5',
          'after:w-full',
          'after:z-10',
        )}
      >
        iLan Epstein
      </div>
      <div class="text-xl">Creative problem solver</div>
    </div>
  </div>
</section>

<section id="about-me"></section>
