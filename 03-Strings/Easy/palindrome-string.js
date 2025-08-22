/*
Problem Name: Palindrome String
Description:
  A string is called a palindrome if it reads the same forward and backward.
  Write a function to check whether the given string is a palindrome or not.

Example:
  Input: "madam"
  Output: true

  Input: "hello"
  Output: false

Time Complexity:
  O(n) → because we check each character once.
Space Complexity:
  O(1) → no extra space used apart from variables.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("MadAm"));
