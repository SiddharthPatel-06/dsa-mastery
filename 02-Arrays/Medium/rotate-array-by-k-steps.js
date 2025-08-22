/*
Problem Name: Rotate Array by K Steps
Description:
  Given an array, rotate it to the right by k steps.

Example:
  Input: arr = [1, 2, 3, 4, 5, 6, 7], k = 3
  Output: [5, 6, 7, 1, 2, 3, 4]

Time Complexity:
  O(n) → because we need to visit each element once.
Space Complexity:
  O(1) → if we rotate in-place.
*/

function rotateArray(arr, k) {
  k = k % arr.length;
  let n = arr.length;

  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);

  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
