import { describe, expect, it } from 'vitest'
import { getDurationSegments } from './getDurationSegments'

describe('getDurationSegments(duration: string): { value: number, unit: string }', () => {
  const tests = [
    ['5 seconds', { value: 5, unit: 'second' }],
    ['1 minutes', { value: 1, unit: 'minute' }],
    ['24 hour', { value: 24, unit: 'hour' }],
    ['321 day', { value: 321, unit: 'day' }],
    ['12 week', { value: 12, unit: 'week' }],
    ['3 month', { value: 3, unit: 'month' }],
    ['11 year', { value: 11, unit: 'year' }],
    ['1.5 minutes', { value: 1.5, unit: 'minute' }],
    ['20 ms', { value: 20, unit: 'ms' }],
  ]

  it('is case insensitive', () => {
    const { unit } = getDurationSegments('5 MinUte')

    expect(unit).toBe('minute')
  })

  it('returns value in { value: number, unit: string } format, such as { value: 12, unit: "minute" }', () => {
    const { value, unit} = getDurationSegments('5 minutes')

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
