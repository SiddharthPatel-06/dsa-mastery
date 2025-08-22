/*
Problem Name: Reverse String
Description:
  Given a string, reverse it and return the reversed version.

Example:
  Input: "hello"
  Output: "olleh"

Time Complexity:
  O(n) → because we go through each character once.
Space Complexity:
  O(n) → because a new reversed string is created.
*/

function reverseString(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString("madam"));
console.log(reverseString("Sid"));
