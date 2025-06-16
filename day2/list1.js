/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) {
    return null;
  } else if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  }

  let t1 = list1;
  let t2 = list2;
  let t = null;
  let head = null;

  if (t1.val < t2.val) {
    head = new ListNode(t1.val);
    t1 = t1.next;
  } else {
    head = new ListNode(t2.val);
    t2 = t2.next;
  }

  t = head;

  while (t1 !== null && t2 !== null) {
    if (t1.val < t2.val) {
      t.next = new ListNode(t1.val);
      t = t.next;
      t1 = t1.next;
    } else {
      t.next = new ListNode(t2.val);
      t = t.next;
      t2 = t2.next;
    }
  }

  while (t1 !== null) {
    t.next = new ListNode(t1.val);
    t = t.next;
    t1 = t1.next;
  }

  while (t2 !== null) {
    t.next = new ListNode(t2.val);
    t = t.next;
    t2 = t2.next;
  }

  return head;
};
