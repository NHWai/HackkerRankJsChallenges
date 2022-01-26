"use strict";

function twoArrays(k, A, B) {
  // Write your code here

  const value = A.map((el) => Math.abs(k - el));
  console.log(value);
  const totalValue = value.reduce((a, b) => a + b);
  console.log(totalValue);
  const totalB = B.reduce((a, b) => a + b);
  console.log(totalB);

  if (totalValue <= totalB) return "YES";

  return "NO";
}

// const a = [2, 1, 3];
// const b = [7, 8, 9];
// const k = 10;
// const a = [4, 4, 3, 2, 1, 4, 4, 3, 2, 4];
// const b = [2, 3, 0, 1, 1, 3, 1, 0, 0, 2];
// const k = 4;

// const a = [1, 2, 2, 1];
// const b = [3, 3, 3, 4];
// const k = 5;

const a = [20, 1];
const b = [1, 1];
const k = 4;

console.log(twoArrays(k, a, b));

/*
5


2 4
1 3
3 1

5 5
2 3 1 1 1
1 3 4 3 3

10 9
1 5 1 4 4 2 7 1 2 2
8 7 1 7 7 4 4 3 6 7

10 9
3 6 8 5 9 9 4 8 4 7
5 1 0 1 6 4 1 7 4 3

10 4
4 4 3 2 1 4 4 3 2 4
2 3 0 1 1 3 1 0 0 2


YES
NO
NO
YES
YES

*/
