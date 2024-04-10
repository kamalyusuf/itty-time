import { describe, expect, it } from 'vitest'
import { toDuration } from './toDuration'
import { toSeconds } from './toSeconds'

describe('toDuration(ms: number, parts?: number)', () => {
  describe('reverse-parses ms (number) into a readable string', () => {
    const tests = [
      { original: '1 week, 3 days, 30 minutes' },
      // { original: '1 month, 4 minutes, 20 seconds', parts: 2, expected: '1 month, 4 minutes' },
      { original: '1 hour and 30 minutes', parts: 2, expected: '1 hour, 30 minutes' },
      { original: '2 days and 23 hours', parts: 1, expected: '2 days' },
    ]

    for (const { original, parts, expected = original } of tests) {
      it(original, () => {
        expect(toDuration(toSeconds(original) * 1000, { parts })).toBe(expected)
      })
    }
  })
})
