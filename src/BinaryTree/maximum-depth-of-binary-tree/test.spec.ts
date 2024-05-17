import { maxDepth } from '.'
import { TreeNode } from '..'
import { describe, expect, it } from 'vitest'

const treeData: TreeNode = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 7,
      left: null,
      right: null
    },
    right: {
      val: 15,
      left: null,
      right: null
    }
  }
}

describe('求二叉树最大深度', () => {
  it('example1', () => {
    expect(maxDepth(treeData)).toBe(3)
  })
})
