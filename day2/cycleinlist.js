/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const table = new Map();
  let temp = head;

  while (temp !== null) {
    if (table.has(temp)) {
      return true;
    }
    table.set(temp, true);
    temp = temp.next;
  }

  return false;
};
