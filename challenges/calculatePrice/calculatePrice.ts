export function calculatePrice(
  closingDate: string,
  visitDate: string,
  originalPrice: number,
): number {
  const closingDatetime = new Date(closingDate)
  const visitDatetime = new Date(visitDate)
  if (closingDatetime <= visitDatetime) {
    return originalPrice
  }
  const daysDifference =
    (closingDatetime.getTime() - visitDatetime.getTime()) /
    (1000 * 60 * 60 * 24)
  const weeksDifference = Math.floor(daysDifference / 7)
  const discount = Math.pow(0.9, weeksDifference)
  return Math.round(originalPrice * discount * 100) / 100
}
