/*
Problem Name: Move Zeroes
Description:
  Given an array of integers, move all the zeroes to the end 
  while maintaining the relative order of the non-zero elements.
  Do this in-place without making a copy of the array.

Example:
  Input: [0, 1, 0, 3, 12]
  Output: [1, 3, 12, 0, 0]

Time Complexity:
  O(n) → we go through the array once.
Space Complexity:
  O(1) → we are not using extra space (in-place).
*/

function moveZeroes(nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
