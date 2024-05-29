import { describe, expect, it } from 'vitest'
import { lengthOfLIS } from '.'

describe('最长递增子序列', () => {
  it('example1', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toEqual([2, 3, 7, 18])
  })
  // 10
  // 9
  // 2
  // 2 5
  // 2 3
  // 2 3 7
  // 2 3 7 101
  // 2 3 7 18

  it('example2', () => {
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toEqual([0, 1, 2, 3])
  })
  // 0
  // 0 1
  // 0 1
  // 0 1 3
  // 0 1 2
  // 0 1 2 3

  it('example3', () => {
    expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toEqual([7])
  })

  it('example4', () => {
    expect(lengthOfLIS([4, 10, 4, 3, 8, 9])).toEqual([3, 8, 9])
  })
  //         大于最后一个才push  小于最后一个只替换
  // [4]
  // [4,10] 10  +
  // [4,10]            替换第0个4
  // [3,10]
  // 3,8
  // 3,8,9
})
