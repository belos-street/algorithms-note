/** @link https://leetcode.cn/problems/assign-cookies */

/**
 *
 * @param g[] 孩子饿的程度
 * @param size[] 饼干尺寸
 * @returns satisfiedChildren 已满足的孩子数量
 */
export function findContentChildren(g: number[], size: number[]): number {
  //进行升序排序。这样可以确保我们总是先尝试满足饥饿度最小的孩子，并且尝试用最小的饼干去满足
  g.sort((a, b) => a - b)
  size.sort((a, b) => a - b)

  let childIndex = 0 // 孩子的指针
  let cookieIndex = 0 // 饼干的指针
  let satisfiedChildren = 0 // 已满足的孩子数量

  while (childIndex < g.length && cookieIndex < size.length) {
    // 如果当前饼干能满足当前孩子，则分配饼干并移动指针
    if (size[cookieIndex] >= g[childIndex]) {
      satisfiedChildren++
      childIndex++
    }
    // 无论如何，饼干指针都要向后移动，尝试下一个饼干
    cookieIndex++
  }

  return satisfiedChildren
}
