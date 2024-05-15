import { swap } from ".."

/**
 * 核心思想：每次遍历都将最小的元素移动到第一个元素上，然后继续遍历所有元素
 * 需要用一个变量来存储每次遍历的最小值的索引 minIndex
 */
export function selectSort(_nums: number[]) {
  const nums: number[] = [..._nums]
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) minIndex = j
    }
    console.log(nums[minIndex])
    minIndex !== i && swap(nums, i, minIndex)
  }
  return nums
}
