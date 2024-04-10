import { toSeconds } from './toSeconds'

// FUNCTION: get future date from a duration string (e.g. datePlus('3 hours'))
export const datePlus = (duration: string, from?: Date): Date => {
  const next = from ? new Date(from) : new Date()

  return new Date(next.setSeconds(next.getSeconds() + toSeconds(duration)))
}
