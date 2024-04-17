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
  result: any = [], // internal argument - DO NOT EXPOSE
) => {
  for (const [unit, value] of Object.entries(units)) {
    if (ms >= value) {
      const count = Math.floor(ms / value)
      ms %= value
      result.push([unit + (count > 1 ? 's' : ''), count])
    }
  }

  return join
  ? result
      .slice(0, parts)
      .map(([units, count]: any) => count + ' ' + units)
      .join(join)
  : result.slice(0, parts)
}
