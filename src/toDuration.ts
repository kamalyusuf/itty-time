import { units } from './lib/units'

type DurationToStringOptions = {
  parts?: number
  join?: string | false
}

type UnformattedDurationSegment = [ unit: string, value: number ]

type DurationToStringType = (
  milliseconds: number,
  options?: DurationToStringOptions
) => string | UnformattedDurationSegment[]

export const toDuration: DurationToStringType = (
  ms: number,
  {
    parts,
    join = ', ',
  }: DurationToStringOptions = {},
  remainder = ms % 1000,            // internal argument - DO NOT EXPOSE
  result: any = [],                 // internal argument - DO NOT EXPOSE
  seconds = ms / 1000,              // internal argument - DO NOT EXPOSE
) => {
  for (const [unit, value] of Object.entries(units)) {
    if (seconds >= value) {
      const count = Math.floor(seconds / value)
      seconds %= value
      result.push([`${unit}${count > 1 ? 's' : ''}`, count])
    }
  }

  remainder && result.push(['ms', remainder])

  return join
  // @ts-ignore
  ? result.slice(0, parts).map(([units, count]) => `${count} ${units}`).join(join)
  : result
}
