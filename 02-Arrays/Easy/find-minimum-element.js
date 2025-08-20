/*
Problem Name: Find Minimum Element in Array
Description:
  Given an array of numbers, find the smallest element.

Example:
  Input: [10, 20, 4, 45, 99]
  Output: 4

Time Complexity:
  O(n) → because we check each element once.
Space Complexity:
  O(1) → no extra space used, only one variable.
*/

function findMinimumElement(arr) {
  let minElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }
  return minElement;
}

// Test the function
console.log(findMinimumElement([10, 20, 4, 45, 99]));
