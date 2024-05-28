/** @link https://leetcode.cn/problems/coin-change */

function coinChange(coins: number[], amount: number): number {
  const dp = new Array<number>(amount + 1).fill(Infinity) // 初始化一个长度为amount + 1的数组dp，用于存储每个金额所需的最少硬币数，初始值设为Infinity表示尚未找到组合方式
  dp[0] = 0 // dp[0]特例，表示金额为0时，不需要任何硬币

  // 遍历从1到目标金额amount（包括amount本身
  for (let i = 1; i <= amount; i++) {
    // 遍历给定的硬币面额数组
    for (const coin of coins) {
      // 如果当前硬币面额不大于当前遍历的金额i，则考虑使用该硬币
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1) // 更新dp[i]的值，取dp[i]和dp[i - coin] + 1中的较小值，表示在已有组合基础上加入一个coin面额硬币后的最小硬币数
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount] // 判断最终是否找到了组合方式，如果dp[amount]仍为Infinity，说明没有找到组合，返回-1；否则返回dp[amount]即为最少硬币数
}
