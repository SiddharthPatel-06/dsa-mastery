/*
Problem Name: Average of Array Elements
Description:
  Given an array of numbers, find the average of all elements.

Example:
  Input: [1, 2, 3, 4]
  Output: 2.5

Time Complexity:
  O(n) → because we go through each element once.
Space Complexity:
  O(1) → only variables for sum and average are used.
*/

function averageOfArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Test the function
console.log(averageOfArrayElements([1, 2, 3, 4]));
