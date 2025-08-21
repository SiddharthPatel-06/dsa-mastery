/*
Problem Name: Check if Array is Sorted
Description:
  Given an array, check if the array is sorted in 
  non-decreasing order.

Example:
  Input: [1, 2, 3, 4, 5]
  Output: true

  Input: [5, 3, 4, 1]
  Output: false

Time Complexity:
  O(n) → because we check each element once.
Space Complexity:
  O(1) → no extra space used.
*/

function isArraySorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isArraySorted([1, 2, 3, 4, 5]));
