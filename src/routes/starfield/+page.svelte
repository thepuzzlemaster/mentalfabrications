<script lang="ts">
  import StarBackground from '$lib/components/starBackground/starBackground.svelte';
  import { Button } from '$lib/components/ui/button';
  import { setAnimationContext, type AnimationContext } from '$lib/shared/animationContext';
  import '../../app.css';

  let allowAnimation$ = $state<AnimationContext>({
    allowAnimation: true,
    shouldResetStars: false,
    shootingStarCount: 0,
  });

  setAnimationContext(allowAnimation$);

  const resetStars = () => {
    allowAnimation$.shouldResetStars = true;
  };
</script>

<div class="relative h-screen w-screen">
  <Button class="relative z-30 m-4" onclick={resetStars}>Reset stars</Button>
  <StarBackground class="z-20" />
  <div
    class="absolute inset-0 -z-20 bg-radial-bottom-right from-purple-600 from-40% to-blue-950 opacity-20"
  ></div>
  <div
    class="bg-radial-top-left absolute -left-1/3 -top-1/3 -z-20 aspect-square w-full rounded-full from-fuchsia-600 from-30% to-blue-950/60 to-70% opacity-50"
  ></div>
</div>
