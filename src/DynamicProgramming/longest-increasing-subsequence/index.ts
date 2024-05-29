/** @link https://leetcode.cn/problems/longest-increasing-subsequence */

export function lengthOfLIS(nums: number[]): number[] {
  if (nums.length === 0) return []

  const dp: number[] = []
  dp[0] = nums[0]

  //[4, 10, 4, 3, 8, 9]
  // dp
  // 4
  // 4 10
  // 4 4
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const dpLastNum = dp[dp.length - 1]

    if (dp.includes(num)) continue //等于

    if (num > dpLastNum) {
      //大于
      dp.push(num)
      continue
    }

    //小于
    // dp[dp.length - 1] = num

    let dpIndex = dp.length - 1
    while (dpIndex >= 0) {
      if (dp[dpIndex] <= num) {
        dp[dpIndex] = NaN
      } else {
        break
      }
      dpIndex--
    }

    console.log(dp)
  }

  return dp
}
