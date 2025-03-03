import { describe, test, expect } from 'vitest'
import { calculatePrice } from './calculatePrice'

describe('calculate price', () => {
  test('returns a number', () => {
    const result = calculatePrice('2025-04-01', '2025-04-01', 100)
    expect(result).toBeTypeOf('number')
  })

  test('returns the original price when the closing date is the same or before the visit date', () => {
    const result = calculatePrice('2025-04-01', '2025-04-01', 100)
    expect(result).toBe(100)
  })

  test('correctly applies 10% discount for one week ahead', () => {
    const result = calculatePrice('2025-04-01', '2025-03-25', 100)
    expect(result).toBe(90)
  })

  test('correctly applies 10% for each week ahead', () => {
    const result = calculatePrice('2025-04-01', '2025-03-03', 100)
    expect(result).toBe(65.61)
    const result2 = calculatePrice('2025-04-01', '2025-03-15', 50)
    expect(result2).toBe(40.5)
  })

  test('returns original price when the visit date is after the closing date', () => {
    const result = calculatePrice('2025-03-01', '2025-04-01', 100)
    expect(result).toBe(100)
  })
})
