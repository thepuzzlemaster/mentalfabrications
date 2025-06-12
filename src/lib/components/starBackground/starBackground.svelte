<script lang="ts">
  import { getAnimationContext } from '$lib/shared/animationContext';
  import { tweenProperty } from '$lib/shared/tweens';
  import { cn } from '$lib/utils';
  import clamp from 'lodash/clamp';
  import debounce from 'lodash/debounce';
  import { onMount } from 'svelte';
  import type { HTMLCanvasAttributes } from 'svelte/elements';

  interface Props extends HTMLCanvasAttributes {}

  const { class: className, ...restProps }: Props = $props();
  const allowAnimationContext$ = getAnimationContext();

  type ChangingStarProp<T> = {
    current: T;
    final: T;
  };

  type Star = {
    brightness: ChangingStarProp<number>;
    xPercent: number;
    yPercent: number;
    xStart: number;
    yStart: number;
    x: ChangingStarProp<number>;
    y: ChangingStarProp<number>;
    /** size of the star in px: between 2-12 for primary stars, 2-6 for bg stars*/
    size: ChangingStarProp<number>;
  } & (
    | {
        isShooting: false;
        shootingX?: never;
        shootingY?: never;
      }
    | {
        isShooting: true;
        shootingX: number;
        shootingY: number;
      }
  );

  let canvas: HTMLCanvasElement | undefined = undefined;
  const maxPull = 20;
  const starCount = 178;
  const bgSstarCount = 600;
  const stars: Star[] = $state([]);
  let isMouseDown: boolean = $state(false);
  let previousMouseX: number = $state(0);
  let previousMouseY: number = $state(0);
  let mouseDelta: number = $state(0);

  let mouseX: number | undefined = $state(undefined);
  let mouseY: number | undefined = $state(undefined);

  const getStartingCoords = (
    x: number,
    y: number,
  ): Pick<Star, 'xPercent' | 'yPercent' | 'xStart' | 'yStart' | 'x' | 'y'> => {
    return {
      xPercent: x,
      yPercent: y,
      xStart: x,
      yStart: y,
      x: {
        current: x,
        final: x,
      },
      y: {
        current: y,
        final: y,
      },
    };
  };

  const placeAllStars = (preservePosition?: boolean) => {
    const getNewStarPosition = (): Pick<Star, 'xPercent' | 'yPercent'> => {
      return {
        xPercent: Math.random(),
        yPercent: Math.random(),
      };
    };

    if (preservePosition) {
      stars.forEach((star, index) => {
        const newPosition = getNewStarPosition();
        stars[index].xPercent = newPosition.xPercent;
        stars[index].yPercent = newPosition.yPercent;
      });
    }

    const buildForegroundStar = (): Star => {
      const position = getNewStarPosition();
      const brightness = Math.min(Math.random() + 0.3, 0.8);

      return {
        brightness: {
          current: 0,
          final: brightness,
        },
        ...getStartingCoords(position.xPercent, position.yPercent),
        size: {
          current: 0,
          final: Math.random() * 10 + 2,
        },
        isShooting: false,
      };
    };

    const buildBackgroundStar = (): Star => {
      const position = getNewStarPosition();
      const brightness = Math.abs(Math.random() - 0.5);

      return {
        brightness: {
          current: 0,
          final: brightness,
        },
        ...getStartingCoords(position.xPercent, position.yPercent),
        size: {
          current: 0,
          final: Math.random() * 4 + 2,
        },
        isShooting: false,
      };
    };

    while (stars.length < starCount) {
      stars.push(buildForegroundStar());
    }

    while (stars.length < bgSstarCount) {
      stars.push(buildBackgroundStar());
    }
  };

  const shootStar = (x: number, y: number) => {
    const starIndex = Math.round(Math.random() * (stars.length - 1));

    allowAnimationContext$.shootingStarCount++;

    stars[starIndex].isShooting = true;
    stars[starIndex].shootingX = x;
    stars[starIndex].shootingY = y;
  };

  const onMouseMove = (event: MouseEvent) => {
    const width = visualViewport?.width;
    const height = visualViewport?.height;

    if (!width || !height) {
      return;
    }

    mouseX = clamp(event.clientX, 0, width);
    mouseY = clamp(event.clientY, 0, height);

    if (isMouseDown) {
      const deltaX = Math.abs(mouseX - previousMouseX);
      const deltaY = Math.abs(mouseY - previousMouseY);

      mouseDelta += deltaX + deltaY;

      if (mouseDelta > 20) {
        mouseDelta = 0;
        shootStar(mouseX, mouseY);
      }
    }
  };

  const onMouseUp = () => {
    isMouseDown = false;
  };

  const onMouseDown = (event: MouseEvent) => {
    const pressX = event.clientX;
    const pressY = event.clientY;

    isMouseDown = true;
    mouseDelta = 0;
    previousMouseX = pressX;
    previousMouseY = pressY;

    shootStar(pressX, pressY);
  };

  $effect(() => {
    if (allowAnimationContext$.allowAnimation) {
      requestAnimationFrame(animate);
    }
  });

  $effect(() => {
    if (allowAnimationContext$.shouldResetStars) {
      allowAnimationContext$.shouldResetStars = false;
      allowAnimationContext$.shootingStarCount = 0;
      placeAllStars(true);

      stars.forEach((star, index) => positionStar(star, index, true));
    }
  });

  const positionStar = (star: Star, index: number, preservePosition?: boolean) => {
    const xPosition = (visualViewport?.width || window.innerWidth) * star.xPercent;
    const yPosition = (visualViewport?.height || window.innerHeight) * star.yPercent;

    stars[index] = {
      ...star,
      xStart: xPosition,
      yStart: yPosition,
      size: {
        current: preservePosition ? star.size.current : 0,
        final: star.size.final,
      },
      x: {
        current: preservePosition ? star.x.current : xPosition,
        final: xPosition,
      },
      y: {
        current: preservePosition ? star.y.current : yPosition,
        final: yPosition,
      },
    };
  };

  onMount(() => {
    const handleResize = debounce(() => {
      stars.forEach((star, index) => positionStar(star, index));
    }, 300);

    const resizeObserver = new ResizeObserver((entries) => handleResize());

    resizeObserver.observe(document.body);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      resizeObserver.unobserve(document.body);
    };
  });

  const getStarPull = (
    star: Star,
    mouseX?: number,
    mouseY?: number,
  ): { pullX: number; pullY: number; pullDistance: number } => {
    if (mouseX === undefined || mouseY === undefined) {
      return { pullX: 0, pullY: 0, pullDistance: 0 };
    }

    const deltaX = mouseX - star.x.current;
    // Invert the y-axis to account for top-left origin
    const deltaY = -(mouseY - star.y.current);

    const pullDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const rawPullAngle = Math.asin(deltaY / pullDistance);
    const pullAngle = deltaX < 0 ? Math.PI - rawPullAngle : rawPullAngle;

    const pullX = Math.min(pullDistance, Math.cos(pullAngle) * maxPull) * (star.size.final / 10);
    const pullY = -Math.min(pullDistance, Math.sin(pullAngle) * maxPull) * (star.size.final / 10);

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
      // context.arc(star.xStart, star.yStart, star.size.final / 2, 0, Math.PI * 2);
      // context.fillStyle = `rgba(165, 243, 207, ${star.brightness.final / 2})`;
      // context.fill();

      const starPull = getStarPull(star, mouseX, mouseY);
      star.x.final = (star.shootingX || star.xStart) + starPull.pullX;
      star.y.final = (star.shootingY || star.yStart) + starPull.pullY;

      star.x.current = tweenProperty(
        star.x.current,
        star.x.final,
        star.isShooting ? 1.5 : undefined,
      );
      star.y.current = tweenProperty(
        star.y.current,
        star.y.final,
        star.isShooting ? 1.5 : undefined,
      );

      const finalBrightness = star.isShooting
        ? 1
        : Math.min(
            star.brightness.final,
            Math.max(0.065, 1.2 - (starPull.pullDistance / maxViewportDistance) * 2),
          );
      star.brightness.current = tweenProperty(star.brightness.current, finalBrightness, 1.5);

      const finalSize = star.isShooting ? star.size.final * 2 : star.size.final;
      star.size.current = tweenProperty(star.size.current, finalSize, 0.5);

      context.beginPath();
      context.arc(star.x.current, star.y.current, star.size.current / 2, 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 255, 255, ${star.brightness.current})`;
      context.fill();

      const blurSize = 1.5;
      const blur = context.createRadialGradient(
        star.x.current,
        star.y.current,
        0,
        star.x.current,
        star.y.current,
        star.size.current * blurSize,
      );
      blur.addColorStop(0, `rgba(255, 255, 255, ${star.brightness.current})`);
      blur.addColorStop(0.65, `rgba(255, 255, 255, ${star.brightness.current / 8})`);
      blur.addColorStop(1, `rgba(255, 255, 255, ${0})`);

      context.beginPath();
      context.arc(star.x.current, star.y.current, star.size.current * blurSize, 0, Math.PI * 2);
      context.fillStyle = blur;
      context.fill();

      if (
        star.isShooting &&
        Math.abs(star.x.current - star.x.final) <= 20 &&
        Math.abs(star.y.current - star.y.final) <= 20
      ) {
        Object.assign<Star, Partial<Star>>(star, {
          xStart: star.x.final,
          yStart: star.y.final,
          xPercent: star.x.final / canvas.width,
          yPercent: star.y.final / canvas.height,
          isShooting: false,
          shootingX: undefined,
          shootingY: undefined,
        });
      }
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

  placeAllStars();
</script>

<canvas
  bind:this={canvas}
  class={cn('fixed left-0 top-0 -z-20', className)}
  {...restProps}
></canvas>
