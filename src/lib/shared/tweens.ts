const tweenSpeed = .1

export const tweenProperty = (current: number, final: number, speedMultiplier: number = 1): number => {
  const delta = final - current
  return current += delta * tweenSpeed * speedMultiplier
}