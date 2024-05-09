/** https://leetcode.cn/problems/remove-linked-list-elements/ */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
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
