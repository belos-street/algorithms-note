/** @link https://leetcode.cn/problems/search-insert-position */

//必须使用时间复杂度为 O(log n) 的算法

//二分
export function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return left
}

//遍历
export function searchInsert2(nums: number[], target: number): number {
  let index = nums.findIndex((n) => n >= target)
  return index === -1 ? nums.length : index
}
