/*
Problem Name: Maximum Subarray (Kadane’s Algorithm)
Description:
  Given an integer array nums, find the contiguous subarray 
  (containing at least one number) which has the largest sum, 
  and return its sum.

Example:
  Input: [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6

  Input: [1]
  Output: 1

  Input: [5,4,-1,7,8]
  Output: 23

Time Complexity:
  O(n) → because we scan the array once.
Space Complexity:
  O(1) → only variables for current sum and max sum are used.
*/

function maximumSubarray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maximumSubarray([1]));
console.log(maximumSubarray([5, 4, -1, 7, 8]));
