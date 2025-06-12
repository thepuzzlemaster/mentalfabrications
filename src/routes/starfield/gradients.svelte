<script lang="ts">
  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  type GradientAnimationData = {
    /** Starting `x` value in percentage, from the center of the screen to start the animation */
    start: number;
    /**
     * This technically sets the `duration` on the tween.
     * A higher value results in a slower/subtler animation.
     * Because we are setting a new tween destination multiple times per second, a higher number, will prevent the animation from ever reaching its destination.
     */
    speedLimiter: number;
    /**
     * Determines how quickly and expansively the animation projects on the x-axis.
     * A smaller number triggers a shorter and jumpier animation.
     * NOTE: An identical xFrequency and yFrequency will produce a circular animation
     */
    xFrequency: number;
    /**
     * Determines how quickly and expansively the animation projects on the y-axis.
     * A smaller number triggers a shorter and jumpier animation
     * NOTE: An identical xFrequency and yFrequency will produce a circular animation
     */
    yFrequency: number;
    /** A numberical value which expands the animation's size */
    animationScale: number;
  };

  type GradientMap = {
    [key: string]: GradientAnimationData;
  };

  const gradientMap: GradientMap = {
    gradient1: {
      start: -30,
      speedLimiter: 10000,
      xFrequency: 8000,
      yFrequency: 10000,
      animationScale: 20,
    },
    gradient2: {
      start: 30,
      speedLimiter: 16000,
      xFrequency: 4000,
      yFrequency: 6000,
      animationScale: 30,
    },
    gradient3: {
      start: 0,
      speedLimiter: 28000,
      xFrequency: 1600,
      yFrequency: 1000,
      animationScale: 40,
    },
  };

  function getPosition(data: GradientAnimationData): { x: number; y: number } {
    return {
      x: data.start + Math.sin(Date.now() / data.xFrequency) * data.animationScale,
      y: data.start + Math.cos(Date.now() / data.yFrequency) * data.animationScale,
    };
  }

  let gradient1 = tweened(getPosition(gradientMap.gradient1), {
    duration: gradientMap.gradient1.speedLimiter,
    easing: cubicOut,
  });

  let gradient2 = tweened(getPosition(gradientMap.gradient2), {
    duration: gradientMap.gradient2.speedLimiter,
    easing: cubicOut,
  });

  let gradient3 = tweened(getPosition(gradientMap.gradient3), {
    duration: gradientMap.gradient3.speedLimiter,
    easing: cubicOut,
  });

  let animationRunning = true;
  let animationFrame: number;

  function updatePositions(): void {
    // console.log('updatePositions');
    gradient1.set(getPosition(gradientMap.gradient1));
    gradient2.set(getPosition(gradientMap.gradient2));
    gradient3.set(getPosition(gradientMap.gradient3));

    if (animationRunning) {
      animationFrame = requestAnimationFrame(updatePositions);
    }
  }

  onMount(() => {
    updatePositions();
    return () => {
      animationRunning = false;
      cancelAnimationFrame?.(animationFrame);
    };
  });
</script>

<div class="absolute inset-0 -z-20 overflow-hidden">
  <div
    class="absolute h-full w-full rounded-full bg-radial from-purple-600 from-20% via-blue-950/50 to-blue-950/0 opacity-30"
    style="transform: translate({$gradient1.x}vw, {$gradient1.y}vh) scale(1.5);"
  ></div>
  <div
    class="absolute aspect-square h-full w-full rounded-full bg-radial from-fuchsia-600 from-20% via-blue-950/50 to-blue-950/0 opacity-15"
    style="transform: translate({$gradient2.x}vw, {$gradient2.y}vh) scale(1.1)"
  ></div>
  <div
    class="absolute aspect-square h-full w-full rounded-full bg-radial from-emerald-600 from-15% via-blue-950/50 to-blue-950/0 opacity-40"
    style="transform: translate({$gradient3.x}vw, {$gradient3.y}vh) scale(1.6)"
  ></div>
</div>
