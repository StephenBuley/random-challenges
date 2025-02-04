import { describe, test, expect } from 'vitest'
import { evaluatePostfix } from './evaluatePostfix'

describe('evaluate postfix', () => {
  test('returns an integer', () => {
    const result = evaluatePostfix('12+')
    expect(result).toBeTypeOf('number')
  })

  test('returns 0 when the postfix is empty', () => {
    const result = evaluatePostfix('')
    expect(result).toBe(0)
  })

  test('correctly adds two numbers', () => {
    const result = evaluatePostfix('12+')
    expect(result).toBe(3)
  })

  test('correctly subtracts two numbers', () => {
    const result = evaluatePostfix('32-')
    expect(result).toBe(1)
  })

  test('correctly multiplies two numbers', () => {
    const result = evaluatePostfix('23*')
    expect(result).toBe(6)
  })

  test('correctly divides two numbers', () => {
    const result = evaluatePostfix('84/')
    expect(result).toBe(2)
  })

  test('correctly evaluates a complex expression', () => {
    const result = evaluatePostfix('56+7*7-5/')
    expect(result).toBe(14)
  })
})
