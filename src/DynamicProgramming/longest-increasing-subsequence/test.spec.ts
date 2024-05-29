import { describe, expect, it } from 'vitest'
import { lengthOfLIS } from '.'

describe('最长递增子序列', () => {
  it('example1', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4)
  })

  it('example2', () => {
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4)
  })

  it('example3', () => {
    expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toBe(1)
  })

  it('example4', () => {
    expect(lengthOfLIS([4, 10, 4, 3, 8, 9])).toBe(3)
  })
})
