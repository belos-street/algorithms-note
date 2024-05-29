/** @link https://leetcode.cn/problems/longest-increasing-subsequence */

export function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0

  const dp: number[] = []
  dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const dpLastNum = dp[dp.length - 1]

    if (dp.includes(num)) continue

    if (num < dpLastNum) {
      dp[dp.length - 1] = num
    }

    if (num > dpLastNum) {
      dp.push(num)
    }
    console.log(dp)
  }

  return dp.length
}
