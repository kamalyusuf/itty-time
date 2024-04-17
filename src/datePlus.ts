import { toMs } from './toMs'

// FUNCTION: get future date from a duration string (e.g. datePlus('3 hours'))
export const datePlus = (duration: string | number, from = new Date): Date =>
  new Date(from.getTime() + toMs(duration))
