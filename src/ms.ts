import { getDurationSegments } from './lib/getDurationSegments'
import { units } from './lib/units'

type MsType = (duration: string | number) => number

// FUNCTION: get number of seconds from a duration string
export const ms: MsType =
  (duration: string | number): number =>
    +duration ||
    duration
      // @ts-ignore
      .split(/[,and\s]+\s/) // require commas
      // .split(/[\sand,]+(?=[-\d]+)/) // don't require commas
      .reduce((
        acc: any,
        d: any,
        _: any,
        __: any,
        [value, unit] = getDurationSegments(d)
      ) => acc + (units[unit] || 1) * value, 0)
