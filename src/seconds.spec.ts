import { describe, expect, it } from 'vitest'
import { seconds } from './seconds'

describe('seconds(duration: string): number', () => {
  type SecondsTest = [duration: string | number, expected: number]

  const tests: SecondsTest[] = [
    ['5 seconds', 5],
    ['1 minutes', 60],
    ['24 hour', 60 * 60 * 24],
    ['2 years', 2 * 365 * 24 * 60 * 60],
    ['1 day, 4 hours, 36 minutes', 60 * 60 * 24 + 60 * 60 * 4 + 60 * 36],
    ['321 day', 60 * 60 * 24 * 321],
    ['1.5 seconds', 1.5],
    ['-30 seconds', -30],
    ['1 hour, -30 minutes', 30 * 60],
    [10000, 10],
  ]

  describe('returns number of seconds', () => {
    for (const [duration, expected] of tests) {
      it(`seconds('${duration}') => ${expected}`, () => {
        expect(seconds(duration)).toEqual(expected)
      })
    }
  })
})
