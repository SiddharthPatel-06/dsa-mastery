/*
Problem Name: Two Sum
Description:
  Given an array of integers and a target value, find the indices of the two numbers 
  such that they add up to the target.

Example:
  Input: nums = [2, 7, 11, 15], target = 9
  Output: [0, 1]   // Because nums[0] + nums[1] = 2 + 7 = 9

Time Complexity:
  O(n) → because we check each number once and use a map for quick lookups.
Space Complexity:
  O(n) → extra space is used for storing elements in a map.
*/

function twoSum(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(arr[i], i);
    }
  }
}

console.log(twoSum([2, 7, 11, 15, 5], 9));
