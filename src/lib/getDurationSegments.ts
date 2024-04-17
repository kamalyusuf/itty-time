type DurationSegment = [
  value: number,
  unit: string
]

export const getDurationSegments = (duration: string): DurationSegment => {
  const match = duration.toLowerCase().match(/^([+-\d.]+)?\s?(\w{2,}?)s?$/) || []

  return [+match[1], match[2]]
}
