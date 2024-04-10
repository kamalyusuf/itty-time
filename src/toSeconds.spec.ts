import { describe, expect, it } from 'vitest'
import { toSeconds } from './toSeconds'

describe('toSeconds(duration: string): number', () => {
  type SecondsTest = [duration: string, expected: number]

  const tests: SecondsTest[] = [
    ['5 seconds', 5],
    ['1 minutes', 60],
    ['24 hour', 60 * 60 * 24],
    ['24 hours, and 3 apples', 60 * 60 * 24], // ignores unknown
    ['2 years', 2 * 365 * 24 * 60 * 60],
    ['1 day, 4 hours, and 36 minutes', 60 * 60 * 24 + 60 * 60 * 4 + 60 * 36],
    ['321 day', 60 * 60 * 24 * 321],
  ]

  describe('returns number of seconds', () => {
    for (const [duration, expected] of tests) {
      it(`toSeconds('${duration}') => ${expected}`, () => {
        expect(toSeconds(duration)).toEqual(expected)
      })
    }
  })
})
