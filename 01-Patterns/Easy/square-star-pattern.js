/*
Problem Name: Square Star Pattern
Description:
  Print a square pattern with stars of size 'n'.

Example:
  Input: n = 4
  Output:
  ****
  ****
  ****
  ****
*/

function squareStarPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

squareStarPattern(4);
