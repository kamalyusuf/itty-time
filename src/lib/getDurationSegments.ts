type DurationSegments = {
  value: number
  unit: string
}

// FUNCTION: get { value, unit } from a duration string
export const getDurationSegments = (duration: string): DurationSegments => {
  const match = duration.toLowerCase().match(/^(?<strValue>[\d.]+)?\s?(?<unit>\w+?)s?$/)
  // @ts-ignore
  const { strValue, unit } = match.groups
  const value = +(strValue === undefined ? 1 : strValue)

  return { value, unit }
}
