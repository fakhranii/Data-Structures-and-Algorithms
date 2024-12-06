// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.
 
// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 
// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const nums = matrix.flat()
    console.log(nums)
    let left = 0, right = nums.length - 1 // (nums.length - 1) => because i wanna reach the index num of it
    while(left <= right){
        let middle = Math.floor((left + right) / 2) // midde index

        if(target > nums[middle] ){
            left = middle + 1
        } else if(target < nums[middle]){
            right = middle - 1
        } else {
            return true
        }
    } 
    return false

};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13));
