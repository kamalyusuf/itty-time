import { describe, expect, it } from 'vitest'
import { toMs } from './toMs'

describe('toMs(duration: string): number', () => {
  type MsTest = [duration: string, expected: number]

  const tests: MsTest[] = [
    ['1 minutes', 60],
    ['24 hour', 60 * 60 * 24],
    ['2 years', 2 * 365 * 24 * 60 * 60],
    ['1 day, 4 hours, and 36 minutes', 60 * 60 * 24 + 60 * 60 * 4 + 60 * 36],
    ['321 day', 60 * 60 * 24 * 321],
  ]

  describe('returns number of Ms', () => {
    for (const [duration, expected] of tests) {
      it(`toMs('${duration}') => ${expected * 1000}`, () => {
        expect(toMs(duration)).toEqual(expected * 1000)
      })
    }
  })
})
