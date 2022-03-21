import { milToSeconds } from './milToSeconds'
import { unitTestArray } from './unitTest'

export const diffMilTime = (targetTime: number, currentTime: number) => {
  const targetTotalSeconds = milToSeconds(targetTime)
  const currentTotalSeconds = milToSeconds(currentTime)

  const diff = targetTotalSeconds - currentTotalSeconds

  const hours = Math.floor(diff / 60 ** 2)
  const minutes = Math.floor((diff / 60) % 60)
  const seconds = diff % 60

  let string = ''
  if (hours) string += `${hours}h`
  if (hours || minutes) string += `${minutes}m`
  if (!hours && minutes < 30) string += `${seconds}s`

  return string
}

// Unit Tests
const testCases: [[number, number], string][] = [
  [[63000, 62000], '10m0s'],
  [[63000, 63000], '0s'],
  [[40000, 21033], '1h49m'],
]
unitTestArray(diffMilTime, testCases)
