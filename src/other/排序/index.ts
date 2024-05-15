/**
 * @param nums 数组
 * @param aIndex 下标a
 * @param bIndex 下标b
 * @description 交换数组中两个指定下标元素的值
 */

export function swap(nums: number[], aIndex: number, bIndex: number) {
  const tempNum = nums[aIndex]
  nums[aIndex] = nums[bIndex]
  nums[bIndex] = tempNum
}