/** @link https://leetcode.cn/problems/longest-increasing-subsequence */

export function lengthOfLIS(nums: number[]): number[] {
  if (nums.length === 0) return []

  const dp: number[] = []
  dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const dpLastNum = dp[dp.length - 1]

    if (dp.includes(num)) continue //等于

    //大于
    if (num > dpLastNum) {
      dp.push(num)
      continue
    }

    //可以用二分法优化
    let dpIndex = dp.length - 1
    while (dpIndex >= 0) {
      if (dp[dpIndex] === num) break //等于

      const preNum = dp[dpIndex - 1]
      if (preNum) {
        if (num > preNum && num < dp[dpIndex]) {
          dp[dpIndex] = num
          break
        }
      } else {
        dp[dpIndex] = num
        break
      }

      dpIndex--
    }
  }

  return dp
}
