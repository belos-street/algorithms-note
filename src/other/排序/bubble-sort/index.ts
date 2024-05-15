import { swap } from ".."

export function bubbleSort(_nums: number[]): number[] {
  const nums: number[] = [..._nums],
    numsLength = _nums.length
  for (let i = 1; i < numsLength; i++) {
    for (let j = 0; j < numsLength - i; j++) {
      nums[j] > nums[j + 1] && swap(nums, j, j + 1)
    }
  }

  return nums
}