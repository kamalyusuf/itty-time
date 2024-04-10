import { getDurationSegments } from './lib/getDurationSegments'
import { units } from './lib/units'

// FUNCTION: get number of seconds from a duration string
export const toSeconds = (duration: string) => {
  const durations = duration.split(/,?\s*and\s*|,\s*/)
  const now = Date.now()
  let next = now

  for (const d of durations) {
    const { value, unit } = getDurationSegments(d)
    next += units[unit] ? units[unit] * value : 0
  }

  return next - now
}
