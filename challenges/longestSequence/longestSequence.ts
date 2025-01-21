export function longestSequence(ints: number[]) {
  if (ints.length == 0) return 0
  let count = 0
  let maxCount = -100000
  for (let i = 0; i < ints.length; i++) {
    if (i == 0 || Math.abs(ints[i] - ints[i - 1]) == 1) {
      count += 1
    } else {
      count = 1
    }
    if (count > maxCount) {
      maxCount = count
    }
  }
  return maxCount
}
