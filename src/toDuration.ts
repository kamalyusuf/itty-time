import { units } from './lib/units'

type DurationToStringOptions = {
  parts?: number
  join?: string | false
}

export const toDuration = (ms: number, {
  parts,
  join = ', ',
}: DurationToStringOptions = {},
remainder = ms % 1000) => {
  const result = []
  ms /= 1000

  for (const [unit, value] of Object.entries(units)) {
    if (ms >= value) {
      const count = Math.floor(ms / value)
      ms %= value
      result.push([`${unit}${count > 1 ? 's' : ''}`, count])
    }
  }

  remainder && result.push(['ms', remainder])

  return join
  ? result.slice(0, parts).map(([units, count]) => `${count} ${units}`).join(join)
  : result
}
