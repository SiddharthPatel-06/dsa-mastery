/*
Problem Name: Sum of Array Elements
Description:
  Given an array of numbers, find the sum of all elements.

Example:
  Input: [1, 2, 3, 4]
  Output: 10

Time Complexity:
  O(n) → because we go through each element once.
Space Complexity:
  O(1) → only one variable is used to store sum.
*/

function sumOfArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Test the function
console.log(sumOfArrayElements([1, 2, 3, 4]));
