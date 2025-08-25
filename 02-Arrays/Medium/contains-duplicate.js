/*
Problem Name: Contains Duplicate
Description:
  Given an integer array, check if any value appears at least twice.
  Return true if any duplicate exists, otherwise false.

Example:
  Input: [1, 2, 3, 1]
  Output: true

  Input: [1, 2, 3, 4]
  Output: false

Time Complexity:
  O(n) → we scan the array once while using a set for lookups.
Space Complexity:
  O(n) → extra space for storing elements in a set.
*/

function containsDuplicate(nums) {
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([7, 8, 9, 7]));
