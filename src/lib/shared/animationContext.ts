import { getContext, setContext } from 'svelte';

const AnimationContextKey = 'animation'

export type AnimationContext = { allowAnimation: boolean, shouldResetStars: boolean, shootingStarCount: number }

export function setAnimationContext(allowAnimation: AnimationContext) {
  setContext(AnimationContextKey, allowAnimation)
}

export function getAnimationContext(): AnimationContext {
  return getContext<AnimationContext>(AnimationContextKey)
}