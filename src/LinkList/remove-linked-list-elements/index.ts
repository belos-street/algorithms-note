/** @link https://leetcode.cn/problems/remove-linked-list-elements/ */
import { ListNode } from '..'

export function removeElements(head: ListNode | null, val: number): ListNode | null {
  let eleNode = {
    next: head
  }

  let p = eleNode
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }

  return eleNode.next
}
