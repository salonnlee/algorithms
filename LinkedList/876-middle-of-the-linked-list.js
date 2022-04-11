// 链表的中间结点 ( LeetCode 876 )

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

/**
 * @param {any} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
