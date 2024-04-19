import { units } from './lib/units'

type Ms = (duration: string | number) => number

// FUNCTION: get number of seconds from a duration string
export const ms: Ms = (duration: string | number): number => {
  if (+duration) return +duration

  // @ts-ignore
  // const [, value, unit] = duration.match(/^(.+) +(\w\w*?)s?$/) || [] // slower
  const [, value, unit] = duration.match(/^([^ ]+) *(\w\w*?)s?$/) || []
  return +value * units[unit]
}
