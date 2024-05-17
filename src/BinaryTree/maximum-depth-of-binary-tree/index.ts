/** @link https://leetcode.cn/problems/maximum-depth-of-binary-tree */

import { TreeNode } from '..'

/**
 *  maxDepth(root.left)和maxDepth(root.right) 分别递归计算左子树和右子树的最大深度。
 *  Math.max(...)用来选取两者中的较大值，即当前节点的左子树最大深度和右子树最大深度中的较大者。
 *  +1是因为当前节点的深度等于其左（或右）子树的最大深度再加1（因为当前节点位于其子树之上，形成新的一层）
 */
export function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0 //中止条件
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
