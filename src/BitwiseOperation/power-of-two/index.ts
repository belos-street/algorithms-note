/** @link https://leetcode.cn/problems/power-of-two/description/ */

// 不使用循环/递归解决此问题
/**
 * @function isPowerOfTwo
 * @思路 按位与运算 2^n & (2^n) - 1 === 0
 *
 * 2的幂        二进制为
 *  2^0 = 1    1
 *  2^1 = 2    10
 *  2^2 = 4    100
 *  2^3 = 8    1000
 *  2^4 = 16   10000
 *  ...
 *  则有
 *   2^n        10000...
 * 与(2^n) - 1  01111...
 * @按位与运算
 * @结果为0
 * 则为2的幂
 *
 * 如 8&7
 * 8           1000
 * 7           0111
 * 结果         0000
 */

//n必须是正整数 n>0
function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0
}
