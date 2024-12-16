/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // Initialize a dummy node to simplify result list creation
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  // Traverse both linked lists until both are null
  while (l1 !== null || l2 !== null) {
    // Get values from the nodes (or 0 if the list is null)
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;

    // Calculate the sum of digits and the carry
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);

    // Create a new node for the digit and attach it
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move to the next nodes in the lists
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // If there is a carry left, add a final node
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  // Return the result list (skipping the dummy node)
  return dummy.next;
};
