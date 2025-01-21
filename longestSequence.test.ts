import { describe, expect, test } from 'vitest'
import { longestSequence } from './longestSequence'
/*
Given a list of integers, 
write a function that finds the longest subsequence 
where the difference between consecutive elements is either 1 or -1. 
Return the length of this subsequence.
*/
describe('longest sequence', () => {
  test('returns an integer', () => {
    expect(longestSequence([])).toBeTypeOf('number')
  })

  test('returns 0 when list is empty', () => {
    expect(longestSequence([])).toBe(0)
  })

  test('returns 1 when the list has 1 integer', () => {
    expect(longestSequence([1])).toBe(1)

    expect(longestSequence([10429])).toBe(1)
  })

  describe('returns the length of the longest sequence of positive stepwise motion', () => {
    test('1,2,3,4,5 returns 5', () => {
      expect(longestSequence([1, 2, 3, 4, 5])).toBe(5)
    })

    test('4,2,3,1,5 returns 2', () => {
      expect(longestSequence([4, 2, 3, 1, 5])).toBe(2)
    })

    test('10,11,7,8,9,12 returns 3', () => {
      expect(longestSequence([10, 11, 7, 8, 9, 12])).toBe(3)
    })
  })

  describe('returns the length of the longest sequence of negative stepwise motion', () => {
    test('5,4,3,2,1 returns 5', () => {
      expect(longestSequence([5, 4, 3, 2, 1])).toBe(5)
    })

    test('5,1,3,2,4 returns 2', () => {
      expect(longestSequence([5, 1, 3, 2, 4])).toBe(2)
    })

    test('12,9,8,7,11,10 returns 3', () => {
      expect(longestSequence([12, 9, 8, 7, 11, 10])).toBe(3)
    })
  })

  describe('handles positive and negative motion together', () => {
    test('1,2,3,4,5,6,5,4 returns 8', () => {
      expect(longestSequence([1, 2, 3, 4, 5, 6, 5, 4])).toBe(8)
    })
  })
})
