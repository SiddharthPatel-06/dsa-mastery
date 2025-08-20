/*
Problem Name: Find Maximum Element in Array
Description:
  Given an array of numbers, find the largest element.

Example:
  Input: [10, 20, 4, 45, 99]
  Output: 99

  Time Complexity:
  O(n) → because we check each element once.
Space Complexity:
  O(1) → no extra space used, only one variable (maxElement).
*/

function findMaximumElement(arr) {
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

// Test the function
console.log(findMaximumElement([10, 20, 4, 45, 99]));
