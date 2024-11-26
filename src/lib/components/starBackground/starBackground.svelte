<script lang="ts">
  import clamp from 'lodash/clamp';
  import { onMount } from 'svelte';

  interface Star {
    brightness: number;
    mouseX?: number;
    mouseY?: number;
    xPercent: number;
    yPercent: number;
    size: number;
  }

  let canvas: HTMLCanvasElement | undefined = undefined;
  const starCount = 178;
  const stars: Star[] = $state([]);

  let mouseX: number | undefined = $state(undefined);
  let mouseY: number | undefined = $state(undefined);

  while (stars.length < starCount) {
    stars.push({
      brightness: Math.min(Math.random() + 0.3, 1),
      xPercent: Math.random(),
      yPercent: Math.random(),
      size: Math.random() * 10 + 2,
    });
  }

  const onMouseMove = (event: MouseEvent) => {
    const width = visualViewport?.width;
    const height = visualViewport?.height;

    if (!width || !height) {
      return;
    }

    mouseX = clamp(event.clientX, 0, width);
    mouseY = clamp(event.clientY, 0, height);
  };

  onMount(() => {
    document.addEventListener('mousemove', onMouseMove);

    return () => document.removeEventListener('mousemove', onMouseMove);
  });

  const getStarPull = (
    star: Star,
    totalWidth: number,
    totalHeight: number,
    mouseX?: number,
    mouseY?: number,
  ): { pullX: number; pullY: number; pullDistance: number } => {
    if (!mouseX || !mouseY) {
      return { pullX: 0, pullY: 0, pullDistance: 0 };
    }

    const deltaX = mouseX - star.xPercent * totalWidth;
    // Invert the y-axis to account for top-left origin
    const deltaY = totalHeight - mouseY - (totalHeight - star.yPercent * totalHeight);
    const pullDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const rawPullAngle = Math.asin(deltaY / pullDistance);
    const pullAngle = deltaX < 0 ? Math.PI - rawPullAngle : rawPullAngle;

    const pullX = Math.min(pullDistance, Math.cos(pullAngle) * 20);
    const pullY = -Math.min(pullDistance, Math.sin(pullAngle) * 20);

    return { pullX, pullY, pullDistance };
  };

  $effect(() => {
    const context = canvas?.getContext('2d');
    if (!canvas || !context) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stars.forEach((star) => {
      if (!canvas) {
        return;
      }

      // context.beginPath();
      // context.arc(
      //   star.xPercent * canvas.width,
      //   star.yPercent * canvas.height,
      //   star.size / 2,
      //   0,
      //   Math.PI * 2,
      // );
      // context.fillStyle = `rgba(165, 243, 207, ${star.brightness / 2})`;
      // context.fill();

      const starPull = getStarPull(star, canvas.width, canvas.height, mouseX, mouseY);
      context.beginPath();
      context.arc(
        star.xPercent * canvas.width + starPull.pullX,
        star.yPercent * canvas.height + starPull.pullY,
        star.size / 2,
        0,
        Math.PI * 2,
      );
      context.fillStyle = `rgba(255, 255, 255, ${0.1 + (100 - starPull.pullDistance / 10) / 100})`;
      context.fill();
    });
  });
</script>

<canvas bind:this={canvas} class="fixed left-0 top-0 -z-10"></canvas>
