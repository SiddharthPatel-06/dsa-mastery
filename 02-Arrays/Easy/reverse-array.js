/*
Problem Name: Reverse an Array
Description:
  Given an array of numbers, reverse the array in place 
  or return a new reversed array.

Example:
  Input: [1, 2, 3, 4, 5]
  Output: [5, 4, 3, 2, 1]

Time Complexity:
  O(n) → because we may need to visit each element once.
Space Complexity:
  O(1)
*/

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

// Test the function
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([1, 2, 3, 4, 5, 6]));
