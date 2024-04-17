// import { toSeconds } from './toSeconds'

// // FUNCTION: get number of ms from a duration string
// export const toMs = (duration: string) => toSeconds(duration) * 1000


import { getDurationSegments } from './lib/getDurationSegments'
import { units } from './lib/units'

// FUNCTION: get number of seconds from a duration string
export const toMs = (duration: string, ms = 0) => {
  const durations = duration.split(/,?\s*and\s*|,\s*/)
  // const now = Date.now()
  // let next = now

  for (const d of durations) {
    const { value, unit } = getDurationSegments(d)
    ms += units[unit] ? units[unit] * value * 1000 : value
  }

  return ms
}
