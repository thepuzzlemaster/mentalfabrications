<script lang="ts">
  import { getAnimationContext } from '$lib/shared/animationContext';
  import clamp from 'lodash/clamp';
  import { onMount } from 'svelte';

  const allowAnimationContext$ = getAnimationContext();

  interface Star {
    brightness: number;
    currentBrightness: number;
    xPercent: number;
    yPercent: number;
    xStart: number;
    yStart: number;
    xCurrent: number;
    yCurrent: number;
    xFinal: number;
    yFinal: number;
    size: number;
  }

  let canvas: HTMLCanvasElement | undefined = undefined;
  const speed = 0.075;
  const maxPull = 20;
  const starCount = 178;
  const stars: Star[] = $state([]);

  let mouseX: number | undefined = $state(undefined);
  let mouseY: number | undefined = $state(undefined);

  while (stars.length < starCount) {
    const xPercent = Math.random();
    const yPercent = Math.random();
    const brightness = Math.min(Math.random() + 0.3, 1);

    stars.push({
      brightness,
      currentBrightness: 0,
      xPercent: xPercent,
      yPercent: yPercent,
      xStart: xPercent,
      yStart: yPercent,
      xCurrent: xPercent,
      yCurrent: yPercent,
      xFinal: xPercent,
      yFinal: yPercent,
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

  $effect(() => {
    if (allowAnimationContext$.allowAnimation) {
      requestAnimationFrame(animate);
    }
  });

  onMount(() => {
    stars.forEach((star, index) => {
      const xPosition = (visualViewport?.width || window.innerWidth) * star.xPercent;
      const yPosition = (visualViewport?.height || window.innerHeight) * star.yPercent;

      stars[index] = {
        ...star,
        xStart: xPosition,
        yStart: yPosition,
        xCurrent: xPosition,
        yCurrent: yPosition,
        xFinal: xPosition,
        yFinal: yPosition,
      };
    });
    document.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(animate);

    return () => document.removeEventListener('mousemove', onMouseMove);
  });

  const getStarPull = (
    star: Star,
    totalWidth: number,
    totalHeight: number,
    mouseX?: number,
    mouseY?: number,
  ): { pullX: number; pullY: number; pullDistance: number } => {
    if (mouseX === undefined || mouseY === undefined) {
      return { pullX: 0, pullY: 0, pullDistance: 0 };
    }

    const deltaX = mouseX - star.xCurrent;
    // Invert the y-axis to account for top-left origin
    const deltaY = -(mouseY - star.yCurrent);

    const pullDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const rawPullAngle = Math.asin(deltaY / pullDistance);
    const pullAngle = deltaX < 0 ? Math.PI - rawPullAngle : rawPullAngle;

    const pullX = Math.min(pullDistance, Math.cos(pullAngle) * maxPull);
    const pullY = -Math.min(pullDistance, Math.sin(pullAngle) * maxPull);

    return { pullX, pullY, pullDistance };
  };

  const drawStars = () => {
    const context = canvas?.getContext('2d');
    if (!canvas || !context || !visualViewport) {
      return;
    }

    canvas.width = visualViewport.width;
    canvas.height = visualViewport.height;
    const maxViewportDistance = Math.sqrt(
      canvas.width * canvas.width + canvas.height * canvas.height,
    );

    stars.forEach((star) => {
      if (!canvas) {
        return;
      }

      // context.beginPath();
      // context.arc(star.xStart, star.yStart, star.size / 2, 0, Math.PI * 2);
      // context.fillStyle = `rgba(165, 243, 207, ${star.brightness / 2})`;
      // context.fill();

      const starPull = getStarPull(star, canvas.width, canvas.height, mouseX, mouseY);
      star.xFinal = star.xStart + starPull.pullX;
      star.yFinal = star.yStart + starPull.pullY;

      const deltaX = (star.xFinal - star.xCurrent) * speed;
      const deltaY = (star.yFinal - star.yCurrent) * speed;

      star.xCurrent += deltaX;
      star.yCurrent += deltaY;

      const brightness = Math.max(0.065, 1.2 - (starPull.pullDistance / maxViewportDistance) * 2);
      const brightnessDelta = brightness - star.currentBrightness;
      star.currentBrightness += brightnessDelta * (speed * 1.5);

      context.beginPath();
      context.arc(star.xCurrent, star.yCurrent, star.size / 2, 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 255, 255, ${star.currentBrightness})`;
      context.fill();
    });
  };

  let previousTimestamp = 0;
  const animate = (timestamp: number) => {
    let shouldAnimate = false;
    if (timestamp - previousTimestamp >= 20) {
      previousTimestamp = timestamp;
      shouldAnimate = true;
    }

    if (shouldAnimate) {
      drawStars();
    }

    if (allowAnimationContext$.allowAnimation) {
      requestAnimationFrame(animate);
    }
  };
</script>

<canvas bind:this={canvas} class="fixed left-0 top-0 -z-20"></canvas>
