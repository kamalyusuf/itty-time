import { toSeconds } from './toSeconds'

// FUNCTION: get future date from a duration string (e.g. datePlus('3 hours'))
export const datePlus = (duration: string | number, from = new Date): Date =>
  new Date(from.getTime() + toSeconds(duration) * 1000)
