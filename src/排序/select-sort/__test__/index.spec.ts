
import { describe, expect, it } from 'vitest'
import { selectSort } from '..'

describe('选择排序', () => {

  it('无序', () => {
    const nums = [11, 99, 77, 33, 44, 22, 77, 55, 9, 3, 1, 58]
    expect(selectSort(nums).toString()).toEqual(nums.sort((a, b) => a - b).toString())
  })
})

