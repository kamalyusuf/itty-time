import { describe, expect, it } from 'vitest'
import { duration } from './duration'
import { ms } from './ms'

const BASE = '1.1 weeks'
const EXPECTED = '1 week, 16 hours, 48 minutes'

describe('duration(ms: number, options?: durationOptions)', () => {
  describe('reverse-parses ms (number) into a readable string', () => {
    const tests = [
      { original: BASE, expected: '1 week, 16 hours, 48 minutes' },
      { original: BASE, parts: 2, expected: '1 week, 16.8 hours' },
      { original: BASE, parts: 1, expected: '1.1 weeks' },
      { original: '2.5 seconds', expected: '2.5 seconds' },
      { original: '3.67012 hours', expected: '3 hours, 40 minutes, 12.432 seconds' },
      { original: '2500', expected: '2.5 seconds' },
    ]

    for (const { original, parts, expected = original } of tests) {
      it(original, () => {
        expect(duration(ms(original), { parts })).toBe(expected)
      })
    }
  })

  describe('OPTIONS', () => {
    describe('parts?: number', () => {
      it('will return all parts if undefined', () => {
        expect(duration(ms(BASE), { join: false }).length).toBe(3)
      })
    })

    describe('join?: string | false', () => {
      it('will return joined string using ", " if undefined', () => {
        expect(duration(ms(BASE))).toBe(EXPECTED)
      })
      it('will use a delimiter passed to join', () => {
        expect(duration(ms(BASE), { join: ' --> '})).toBe('1 week --> 16 hours --> 48 minutes')
      })
      it('will return an array of [unit, count] if set to false', () => {
        expect(Array.isArray(duration(ms(BASE), { join: false }))).toBe(true)
      })
      it('will honor parts number if returning array', () => {
        expect(duration(ms(BASE), { join: false, parts: 1 }).length).toBe(1)
      })
    })
  })
})
