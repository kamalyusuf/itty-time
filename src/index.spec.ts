import { describe, expect, it } from 'vitest'
import * as exports from './index'

const expected = [
  'toSeconds',
  'toMs',
  'toDuration',
  'datePlus'
]

describe('itty-time', () => {
  describe('exports', () => {
    for (const exportName of expected) {
      it(exportName, () => {
        expect(typeof exports[exportName]).toBe('function')
      })
    }
  })
})