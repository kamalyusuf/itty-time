import { units } from './lib/units'

type DurationToStringOptions = {
  parts?: number
}

export const toDuration = (ms: number, options: DurationToStringOptions = {}) => {
  const {
    parts = -1,
  } = options

  const result = []
  ms = ms / 1000

  for (const [unit, value] of Object.entries(units)) {
    if (ms < value) continue
    const count = Math.floor(ms / value)
    ms -= count * value
    result.push(`${count} ${unit}${count > 1 ? 's' : ''}`)
    if (parts > 0 && result.length === parts) break
  }

  return result.join(', ')
}
