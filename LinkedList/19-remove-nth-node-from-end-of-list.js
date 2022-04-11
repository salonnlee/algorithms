// 删除链表的倒数第 n 个结点 ( LeetCode 19 )

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  const prehead = new ListNode(-1);
  prehead.next = head;

  let slow = prehead;
  let fast = prehead;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  let delNode = slow.next;
  slow.next = delNode.next;
  delNode.next = null;

  return prehead.next;
};

/**
 * @param {any} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
