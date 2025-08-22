/*
Problem Name: Missing Number
Description:
  You are given an array containing n distinct numbers 
  taken from 0, 1, 2, …, n. Find the one number that is missing.

Example:
  Input: [3, 0, 1]
  Output: 2

Time Complexity:
  O(n) → we loop once through the array.
Space Complexity:
  O(1) → no extra space used.
*/

function missingNumber(nums) {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  return total - sum;
}

console.log(missingNumber([3, 0, 1]));
