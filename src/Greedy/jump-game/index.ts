/** @link https://leetcode.cn/problems/jump-game */

// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

//每次跳跃的时候，争取最大跳跃步数
export function canJump(nums: number[]): boolean {
  let cover = 0 //当前能够跳跃的最大覆盖范围，初始值为0

  // 遍历数组，i的范围从0开始，直到当前的跳跃覆盖范围cover。
  // 注意这里使用i <= cover作为循环条件，是因为需要检查每一个在当前跳跃能力范围内（包括边界）的位置
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]) //动态更新能够到达的最远位置
    if (cover >= nums.length - 1) return true //当cover范围大于等于 nums长度，说明可以跳跃过去
  }

  return false //否则不能
}
