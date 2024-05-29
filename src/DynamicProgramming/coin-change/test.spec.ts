import { describe, expect, it } from 'vitest'
import { coinChange } from '.'

describe('零钱兑换', () => {
  it('example1', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3)
  })

  it('example2', () => {
    expect(coinChange([2], 3)).toBe(-1)
  })

  it('example3', () => {
    expect(coinChange([1], 0)).toBe(0)
  })
})
