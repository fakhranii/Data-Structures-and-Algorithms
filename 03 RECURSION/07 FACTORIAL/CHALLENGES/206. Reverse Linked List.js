// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function reverseList(head) {
    // Base case: if the list is empty or has only one node, return it
    if (head === null || head.next === null) return head;

    // Recursive case: reverse the rest of the list
    const newHead = reverseList(head.next);

    // Reverse the current node's link
    head.next.next = head;
    head.next = null;

    return newHead; // newHead will be the head of the reversed list
}




console.log(reverseList([1,2,3,4,5]));
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]