import { getDurationSegments } from './lib/getDurationSegments'
import { units } from './lib/units'

// FUNCTION: get number of seconds from a duration string
export const toMs = (duration: string | number, ms = 0): number =>
  isNaN(+duration)
  ? duration
      // @ts-ignore
      .split(/,?\s*and\s*|,\s*/)
      .reduce((acc: any, d: any) => {
        const [value, unit] = getDurationSegments(d)
        return acc + (units[unit] ? units[unit] * value * 1000 : value)
      }, ms)
  : duration

