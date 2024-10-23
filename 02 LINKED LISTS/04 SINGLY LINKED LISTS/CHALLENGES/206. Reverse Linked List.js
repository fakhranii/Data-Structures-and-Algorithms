/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 * /


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next; // Save the next node
    current.next = prev; // Reverse the current node's pointer
    prev = current; // Move prev forward
    current = nextNode; // Move current forward
  }

  return prev; // New head of the reversed list
};

console.log(reverseList([1, 2, 3, 4, 5]));
