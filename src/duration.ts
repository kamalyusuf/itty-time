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
) => {
  let count, result: [string, number][] = []
  // console.log('calculating duration of', ms)

  for (let [unit, value] of Object.entries(units)) {
    // console.log('comparing ms', ms, 'to unit', unit, 'with value', value)
    if ((ms >= value || unit == 'second') && parts-- > 0) {
      // if (unit == 'second')
        // console.log('calculating seconds of', ms)
      ms -= (count = ms / value | 0) * value
      if (!parts || unit == 'second') count += ms / value
      if (count != 1) unit += 's'

      // if (unit == 'second')
        // console.log('calculated seconds', count)

      // @ts-ignore
      result.push(join ? count + ' ' + unit : [unit, count])
      if (!ms) break
    }
  }

  return join
  ? result.join(join)
  : result
}
