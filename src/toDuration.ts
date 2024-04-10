import { units } from './lib/units'

type DurationToStringOptions = {
  parts?: number
}

export const toDuration = (ms: number, {
  parts = -1
}: DurationToStringOptions = {}) => {
  const result = []
  ms /= 1000

  for (const [unit, value] of Object.entries(units)) {
    if (ms >= value) {
      const count = Math.floor(ms / value)
      ms %= value
      result.push(`${count} ${unit}${count > 1 ? 's' : ''}`)
      if (parts > 0 && result.length == parts) break
    }
  }

  return result.join(', ')
}
