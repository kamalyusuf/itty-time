import { toSeconds } from './toSeconds'

// FUNCTION: get number of ms from a duration string
export const toMs = (duration: string) => toSeconds(duration) * 1000
