import { describe, expect, it } from 'vitest'
import { findContentChildren } from '.'

describe('分发饼干', () => {
  it('example1', () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1)
  })

  it('example2', () => {
    expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2)
  })

  it('example3', () => {
    expect(findContentChildren([1, 2, 4, 5], [1, 2, 3, 4])).toBe(3)
  })
})
