import { getDurationSegments } from './lib/getDurationSegments'
import { units } from './lib/units'

// FUNCTION: get number of seconds from a duration string
export const toSeconds = (duration: string) => {
  const durations = duration.split(/,?\s*and\s*|,\s*/)
  const now = new Date().setMilliseconds(0)
  let next = now

  for (const d of durations) {
    const { value, unit } = getDurationSegments(d)

    if (units[unit]) {
      next += units[unit] * value
    }
    // else {
    //   const from = new Date(next)
    //   next = +new Date(from.setMonth(from.getMonth() + value * (unit === 'year' ? 12 : 1)))
    // }
  }

  return next - now
}
