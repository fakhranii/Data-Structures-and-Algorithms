/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/

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
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = function (list1, list2) {
  // Create a dummy node to simplify the merging process
  let dummy = new ListNode();
  let current = dummy;

  // Traverse both lists
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1; // Add list1's node to the merged list
      list1 = list1.next; // Move list1's pointer forward
    } else {
      current.next = list2; // Add list2's node to the merged list
      list2 = list2.next; // Move list2's pointer forward
    }
    current = current.next; // Move the current pointer in the merged list
  }

  // If any remaining nodes are left in either list, add them
  current.next = list1 !== null ? list1 : list2;

  // Return the merged list (skipping the dummy node)
  return dummy.next;
};
