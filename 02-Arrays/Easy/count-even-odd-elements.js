/*
Problem Name: Count Even and Odd Elements
Description:
  Given an array of numbers, count how many even numbers 
  and how many odd numbers are present.

Example:
  Input: [1, 2, 3, 4, 5, 6]
  Output: Even = 3, Odd = 3

Time Complexity:
  O(n) → because we check each element once.
Space Complexity:
  O(1) → only variables for counting are used.
*/

function countEvenOddElements(arr) {
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return `Even = ${evenCount}, Odd = ${oddCount}`;
}

// Test the function
console.log(countEvenOddElements([1, 2, 3, 4, 5, 6, 7, 8, 10]));
