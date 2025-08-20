/*
Problem Name: Find Second Largest Element in Array
Description:
  Given an array of numbers, find the second largest element 
  in the array.

Example:
  Input: [12, 35, 1, 10, 34, 1]
  Output: 34

Time Complexity:
  O(n) → because we may need to check each element once.
Space Complexity:
  O(1) → only a few variables are used.
*/

function secondLargestElement(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

// Test the function
console.log(secondLargestElement([12, 35, 1, 18, 34, 34]));
