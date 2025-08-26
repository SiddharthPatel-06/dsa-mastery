/*
Problem Name: Product of Array Except Self
Description:
  Given an integer array nums, return an array answer such that answer[i] 
  is equal to the product of all the elements of nums except nums[i].

  You must solve it without using division and in O(n) time.

Example:
  Input: [1, 2, 3, 4]
  Output: [24, 12, 8, 6]

  Input: [-1, 1, 0, -3, 3]
  Output: [0, 0, 9, 0, 0]

Time Complexity:
  O(n) → two passes over the array (prefix & suffix product).
Space Complexity:
  O(1) extra → output array does not count as extra space.
*/

function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
