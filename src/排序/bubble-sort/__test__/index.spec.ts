
import { describe, expect, it } from 'vitest'
import { bubbleSort } from '..'

describe('冒泡排序', () => {

  it('无序', () => {
    const nums = [11, 99, 33, 44, 22, 77, 55, 9, 3, 1, 58]
    expect(bubbleSort(nums).toString()).toEqual(nums.sort((a, b) => a - b).toString())
  })
})

