/** @link https://leetcode.cn/problems/single-number */

//必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间

/**
 * 使用异或运算
 * 数组中唯一只出现一次的数字。其他数字由于成对出现，在连续的异或操作中相互抵消了
 */
function singleNumber(nums: number[]): number {
  return nums.reduce((pre, cur) => (cur ^= pre), 0)
}
