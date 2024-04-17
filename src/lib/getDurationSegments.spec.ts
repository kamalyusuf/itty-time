import { describe, expect, it } from 'vitest'
import { getDurationSegments } from './getDurationSegments'

describe('getDurationSegments(duration: string): [number, string }', () => {
  const tests = [
    ['5 seconds', [5, 'second']],
    ['1 minutes', [1, 'minute']],
    ['24 hour', [24, 'hour']],
    ['321 day', [321, 'day']],
    ['12 week', [12, 'week']],
    ['3 month', [3, 'month']],
    ['11 year', [11, 'year']],
    ['1.5 minutes', [1.5, 'minute']],
    ['20 ms', [20, 'ms']],
    ['-5 seconds', [-5, 'second']],
    ['+5 seconds', [5, 'second']],
  ]

  it('is case insensitive', () => {
    const [,unit] = getDurationSegments('5 MinUte')

    expect(unit).toBe('minute')
  })

  it('returns value in [number, string } format, such as [12, "minute"]', () => {
    const [value, unit] = getDurationSegments('5 minutes')

    expect(value).toBe(5)
    expect(unit).toBe('minute')
  })

  describe('parses', () => {
    for (const [duration, expected] of tests) {
      it(`getDurationSegments('${duration}') => ${JSON.stringify(expected).replace(/([:,])/g, '$1 ')}`, () => {
        // @ts-ignore
        expect(getDurationSegments(duration)).toEqual(expected)
      })
    }
  })
})
