// 环形链表 ( LeetCode 141 )

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
};

/**
 * @param {any} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
