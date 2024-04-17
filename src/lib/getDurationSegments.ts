type DurationSegment = [
  value: number,
  unit: string
]

// FUNCTION: get { value, unit } from a duration string
// export const getDurationSegments = (duration: string): DurationSegment => {
//   const match = duration.toLowerCase().match(/^(?<v>[+-\d.]+)?\s?(?<u>\w{2,}?)s?$/)
//   // @ts-ignore
//   const { v, u } = match.groups
//   const value = +(v === undefined ? 1 : v)

//   return [value, u]
// }

export const getDurationSegments = (duration: string): DurationSegment => {
  const match = duration.toLowerCase().match(/^([+-\d.]+)?\s?(\w{2,}?)s?$/) || []
  // @ts-ignore
  // const [] = match.groups
  // const value = +(v === undefined ? 1 : v)

  return [+match[1], match[2]]
}
