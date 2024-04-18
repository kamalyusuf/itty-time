import { describe, expect, it } from 'vitest'
import { ms } from './ms'

describe('ms(duration: string): number', () => {
  type MsTest = [duration: string | number, expected: number]

  const tests: MsTest[] = [
    ['1 minutes', 60 * 1000],
    ['1 minutes, 2 seconds', 60 * 1000 + 2 * 1000],
    ['24 hour', 60 * 60 * 24 * 1000],
    ['2 years', 2 * 365 * 24 * 60 * 60 * 1000],
    ['1 day, 4 hours, and 36 minutes', 60 * 60 * 24 * 1000 + 60 * 60 * 4 * 1000 + 60 * 36 * 1000],
    ['321 day', 60 * 60 * 24 * 321 * 1000],
    ['30 seconds, 10 ms', 30 * 1000 + 10],
    // ['30 seconds 10 ms', 30 * 1000 + 10], // doesn't need the commas
    ['30.5 seconds', 30.5 * 1000],
    [4001, 4001], // a number is assumed to be a number
    ['100', 100], // string of a number is assumed to be ms
    ['100 ms', 100], // can handle ms
  ]

  describe('returns number of Ms', () => {
    for (const [duration, expected] of tests) {
      it(`ms('${duration}') => ${expected}`, () => {
        expect(ms(duration)).toEqual(expected)
      })
    }
  })
})
