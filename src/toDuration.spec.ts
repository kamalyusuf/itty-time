import { describe, expect, it } from 'vitest'
import { toDuration } from './toDuration'
import { toSeconds } from './toSeconds'
import { toMs } from './toMs'

describe('toDuration(ms: number, options?: ToDurationOptions)', () => {
  describe('reverse-parses ms (number) into a readable string', () => {
    const tests = [
      { original: '1 week, 3 days, 30 minutes, 12 seconds, 51 ms' },
      // { original: '1 month, 4 minutes, 20 seconds', parts: 2, expected: '1 month, 4 minutes' },
      { original: '1 hour, 30 minutes, 15 seconds', parts: 2, expected: '1 hour, 30 minutes' },
      { original: '2 days, 23 hours', parts: 1, expected: '2 days' },
    ]

    for (const { original, parts, expected = original } of tests) {
      it(original, () => {
        expect(toDuration(toMs(original), { parts })).toBe(expected)
      })
    }
  })

  describe('OPTIONS', () => {
    describe('parts?: number', () => {
      it('will return all parts if undefined', () => {
        expect(toDuration(toMs('1 week, 3 days, 30 minutes, 12 seconds, 51 ms'), { join: false }).length).toBe(5)
        expect(toDuration(toMs('1 week, 12 hours'), { join: false }).length).toBe(2)
      })
    })

    describe('join?: string | false', () => {
      it('will return joined string using ", " if undefined', () => {
        expect(toDuration(toMs('1 week, 12 hours'))).toBe('1 week, 12 hours')
      })
      it('will use a delimiter passed to join', () => {
        expect(toDuration(toMs('1 week, 12 hours'), { join: '+'})).toBe('1 week+12 hours')
      })
      it('will return an array of [unit, count] if set to false', () => {
        expect(Array.isArray(toDuration(toMs('1 week, 12 hours'), { join: false }))).toBe(true)
      })
      it('will honor parts number if returning array', () => {
        expect(toDuration(toMs('1 week, 12 hours'), { join: false, parts: 1 }).length).toBe(1)
      })
    })
  })

  it('can parse down to the millisecond', () => {
    const duration = toDuration(1500)
    expect(duration).toBe('1 second, 500 ms')
  })

  it('can join with a different delimeter', () => {
    const duration = toDuration(1500)
    expect(toDuration(1500, { join: ' and ' })).toBe('1 second and 500 ms')
  })

  it('can return ', () => {
    const duration = toDuration(1500)
    expect(toDuration(1500, { join: ' and ' })).toBe('1 second and 500 ms')
  })
})
