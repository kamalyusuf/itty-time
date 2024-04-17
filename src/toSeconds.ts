import { toMs } from './toMs'

export const toSeconds = (duration: string | number): number =>
  toMs(duration) / 1000
