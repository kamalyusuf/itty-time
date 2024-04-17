import { toMs } from './toMs'

type DurationToSecondsType = (duration: string | number) => number

export const toSeconds: DurationToSecondsType =
  (duration: string | number): number => toMs(duration) / 1000
