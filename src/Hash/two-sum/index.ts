/** @link https://leetcode.cn/problems/two-sum */

/**
 * 实现一个函数twoSum，该函数接收一个整数数组nums和一个目标整数target作为参数，
 * 并找出数组中两个数相加等于目标值的那两个数的索引。假设每个输入都只有一个答案，且不可以使用相同的元素两次。
 *
 * @param {number[]} nums - 包含整数的数组
 * @param {number} target - 目标和
 * @returns {number[]} - 返回一个包含两个整数索引的数组，这两个整数之和等于目标值target
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i], // 获取当前遍历到的数值
      value = target - item // 计算目标值与当前数值的差值

    if (map.has(value)) return [map.get(value)!, i] // 如果差值value已经在Map中，则找到了一对符合条件的数值，返回它们的索引

    map.set(item, i) // 如果差值value不在Map中，将当前数值及其索引存入Map中，继续遍历
  }

  return [] // 如果没有找到符合条件的数值对，返回一个空数组
}
