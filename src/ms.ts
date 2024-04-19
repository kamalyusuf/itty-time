import { units } from './lib/units'

type Ms = (duration: string | number) => number

// FUNCTION: get number of seconds from a duration string
export const ms: Ms = (duration: string | number): number => {
  // early exit if it is a valid number
  if (+duration) return +duration

  // @ts-ignore
  let segments = duration.split?.(/, */), total = 0

  for (const segment of segments) {
    const [, value, unit] = segment.match(/^(.+) +(\w\w*?)s?$/) || []
    total += +value * units[unit]
  }


  return total
}
