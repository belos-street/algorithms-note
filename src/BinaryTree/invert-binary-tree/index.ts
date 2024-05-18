/** @link https://leetcode.cn/problems/invert-binary-tree */

import { TreeNode } from '..'

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root //如果当前节点为空，直接返回null，不做任何操作。

  //当节点为叶子节点（既没有左子树也没有右子树）时，也直接返回当前节点，因为单个节点的镜像还是它自己，不需要交换。
  if (root.left === null && root.right === null) return root

  let tempNode: TreeNode | null = root.left //创建一个临时变量tempNode暂存当前节点的左子节点。
  root.left = root.right //将当前节点的左子节点设置为其原来的右子节点
  root.right = tempNode //将当前节点的右子节点设置为之前保存的左子节点，即完成了当前节点的左右子树交换。

  //递归调用invertTree函数,确保整个二叉树的所有节点都被反转
  invertTree(root.right)
  invertTree(root.left)

  return root
}
