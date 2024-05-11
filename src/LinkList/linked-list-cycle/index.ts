/** @link https://leetcode.cn/problems/linked-list-cycle */
import { ListNode } from '..'

export function hasCycle(head: ListNode | null): boolean {
  const cache = new Set()
  while (head) {
    if (cache.has(head)) return true
    cache.add(head)
    head = head.next
  }
  return false
}

/**
 * @function 双指针解法
 * @param slow 慢指针 一次走一个
 * @param fast 快指针 一次走两个
 * 如果有环形，一定会撞到
 */
export function hasCycle_V2(head: ListNode | null): boolean {
  let [slow, fast] = [head, head]
  while (fast?.next && fast) {
    slow = slow!.next
    fast = fast.next!.next
    if (slow === fast) return true
  }
  return false
}
