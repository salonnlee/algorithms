// 反转链表 ( LeetCode 206 )

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

/**
 * @param {any} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
