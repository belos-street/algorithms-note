import { describe, expect, it } from 'vitest'
import { searchInsert } from '.'

describe('全排列', () => {
  it('example1', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
  })

  it('example2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
  })

  it('example3', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
  })
})
