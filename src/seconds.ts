import { ms } from './ms'

type SecondsType = (duration: string | number) => number

export const seconds: SecondsType =
  (duration: string | number): number => ms(duration) / 1000
