/** @link https://leetcode.cn/problems/fibonacci-number */

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1

function fib(n: number): number {
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

//优化
function fib2(n: number): number {
  let a = 0,
    b = 1
  if (n === 0) return a
  if (n === 1) return b
  for (let i = 2; i <= n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}
