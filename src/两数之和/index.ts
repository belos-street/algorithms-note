type Sign = {
  [k: number]: number
}

/**
 * @param map = {数字:数组位置}
 * @description https://leetcode.cn/problems/two-sum/
 */
export const twoSum = (nums: number[], target: number): number[] => {
  const map: Sign = {}
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index],
      key = target - num
    if (key in map) {
      return [map[key], index]
    } else {
      map[num] = index
    }
  }
  return []
}