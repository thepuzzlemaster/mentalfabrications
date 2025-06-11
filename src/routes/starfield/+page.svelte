<script lang="ts">
  import StarBackground from '$lib/components/starBackground/starBackground.svelte';
  import { Button } from '$lib/components/ui/button';
  import { setAnimationContext, type AnimationContext } from '$lib/shared/animationContext';
  import '../../app.css';
  import Gradients from './gradients.svelte';

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

  <Gradients />
</div>
