import { units } from './lib/units'

type DurationOptions = {
  parts?: number
  join?: string | false
}

type UnformattedDurationSegment = [ unit: string, value: number ]

type DurationType = (
  milliseconds: number,
  options?: DurationOptions
) => string | UnformattedDurationSegment[]

export const duration: DurationType = (
  ms: number,
  {
    parts = 9,
    join = ', ',
  }: DurationOptions = {},
  result: [string, number][] = [], // internal argument - DO NOT EXPOSE
) => {
  let count, u
  for (const [unit, value] of Object.entries(units)) {
    if (ms > value && parts) {
      ms -= (count = ms / value | 0) * value
      if (unit == 'second') count += ms / 1e3
      u = count > 1 ? unit + 's' : unit
      // @ts-ignore
      result.push(join ? (count + ' ' + u) : [u, count])
      parts--
    }
  }

  if (join) return result
      // .map(([units, count]: any) => count + ' ' + units)
      .join(join)

  return result
}
