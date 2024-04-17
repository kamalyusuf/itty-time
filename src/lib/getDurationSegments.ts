type DurationSegment = [
  value: number,
  unit: string
]

export const getDurationSegments = (
  duration: string,
  match = duration.toLowerCase().match(/^([+-\d.]+)?\s?(\w{2,}?)s?$/) || []
): DurationSegment => [+match[1], match[2]]
