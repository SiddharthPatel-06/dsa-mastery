/*
Problem Name: Search an Element in Array
Description:
  Given an array of numbers and a target element, 
  check if the element exists in the array.

Example:
  Input: arr = [1, 2, 3, 4, 5], target = 4
  Output: true

  Input: arr = [1, 2, 3, 4, 5], target = 9
  Output: false

Time Complexity:
  O(n) → because we may need to check every element.
Space Complexity:
  O(1) → no extra space used.
*/

function searchElementInArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

// Test the function
console.log(searchElementInArray([1, 2, 3, 4, 5], 4));
console.log(searchElementInArray([1, 2, 3, 4, 5], 9));
