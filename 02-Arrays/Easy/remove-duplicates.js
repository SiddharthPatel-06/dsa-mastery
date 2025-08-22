/*
Problem Name: Remove Duplicates from Array
Description:
  Given an array of numbers, remove the duplicate elements 
  and return the new array with unique elements.

Example:
  Input: [1, 2, 2, 3, 4, 4, 5]
  Output: [1, 2, 3, 4, 5]

Time Complexity:
  O(n) → we check each element once.
Space Complexity:
  O(n) → for storing unique elements.
*/

function removeDuplicate(arr) {
  let set = new Set(arr);
  return set;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));
