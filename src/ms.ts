import { units } from './lib/units'

type Unit = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';

// FUNCTION: get number of seconds from a duration string
export const ms = (duration: `${number} ${Unit | `${Unit}s`}` | number): number => {
  if (+duration) return +duration
  // @ts-ignore
  const [, value, unit] = duration.match(/^([^ ]+) +(\w\w*?)s?$/) || []

  return +value * (units[unit] || 1)
}
