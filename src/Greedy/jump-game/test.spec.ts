import { describe, expect, it } from 'vitest'
import { canJump } from '.'

describe('全排列', () => {
  it('example1', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true)
  })

  it('example2', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false)
  })

  it('example3', () => {
    expect(canJump([0])).toBe(true)
  })
})
