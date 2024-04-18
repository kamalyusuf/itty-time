import { getDurationSegments } from './lib/getDurationSegments'
import { units } from './lib/units'

type MsType = (duration: string | number) => number

// FUNCTION: get number of seconds from a duration string
export const ms: MsType =
  (duration: string | number, ms = 0): number =>
    Number(duration) ||
    duration
      // @ts-ignore
      .split(/,?\s*and\s*|,\s*/)
      .reduce((
        acc: any,
        d: any,
        a: any,
        b: any,
        [value, unit] = getDurationSegments(d)
      ) => acc + (units[unit] || 1) * value, ms)