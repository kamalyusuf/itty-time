import { describe, expect, it } from 'vitest'
import { datePlus } from './datePlus'
import { seconds } from './seconds'

describe('datePlus(duration: string, from?: Date): Date', () => {
  type DatePlusTest = [duration: string]

  const tests: DatePlusTest[] = [
    ['5 seconds'],
    ['1 minutes'],
    ['24 hour'],
    ['1 day, 4 hours, and 36 minutes'],
    ['2 months'],
    ['4 years'],
    ['321 day'],
  ]

  describe('returns a Date object from the future', () => {
    for (const [duration] of tests) {
      const future = datePlus(duration)

      it(`datePlus('${duration}') => ${future.toISOString()}`, () => {

        const Seconds = seconds(duration)
        const diff = (+future - +new Date()) / 1000|0 - Seconds

        expect(diff).toBeLessThan(2)
      })
    }
  })

  describe('can take an optional second Date paramater', () => {
    for (const [duration] of tests) {
      const oneYearFromNow = datePlus('1 year')
      const future = datePlus(duration, oneYearFromNow)

      it(`datePlus('${duration}', datePlus('1 year')) => ${future.toISOString()}`, () => {

        const Seconds = seconds(duration)
        const diff = (+future - +oneYearFromNow) / 1000|0 - Seconds

        expect(diff).toBeLessThan(2)
      })
    }
  })
})
