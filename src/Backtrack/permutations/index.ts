/** @link https://leetcode.cn/problems/permutations */

//给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案

function backtrack(list: number[][], temp: number[], nums: number[]) {
  // 终止条件
  if (temp.length === nums.length) {
    return list.push([...temp]) // 存放结果
  }

  for (let i = 0; i < nums.length; i++) {
    // 找到一个不在 temp 里的数字（这里用数组的 api 可以判断是否重复，重复节点不放入 tmp）
    if (temp.includes(nums[i])) continue

    temp.push(nums[i]) // 放进去一个元素
    backtrack(list, temp, nums) // 执行递归公式
    temp.pop() // 撤回这个元素
  }
}

export function permute(nums: number[]): number[][] {
  let list: number[][] = []
  backtrack(list, [], nums)
  return list
}
