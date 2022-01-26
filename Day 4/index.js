"use strict";

/*

You will be given a list of integers,"arr", and a single integer "k".
You must create an array of length "k" from elements of "arr" such that its unfairness is minimized.
Call that array "arr1". Unfairness of an array is calculated as

max(arr1) - min(arr1)

Where:
- max denotes the largest integer in "arr1"
- min denotes the smallest integer in "arr1"

Example
arr = [1,4,7,2]
k = 2;


Pick any two elements, say .arr1 =  [4,7]
unfairness = max(4,7) - min(4,7) = 7-4 = 3;
Testing for all pairs, the solution [1,2] provides the minimum unfairness.

Returns ->  int: the minimum possible unfairness

Note: Integers in "arr" may not be unique.


*/

function maxMin(k, arr) {
  // Write your code here
  const arr1 = new Array(k).fill(0);
  const smallToLargest = arr.map((e) => e).sort((a, b) => a - b);
  console.log(smallToLargest);
  // arr1.forEach((el, idx) => (el = smallToLargest[idx]));

  let i = 0;
  let j = k - 1;
  let length = smallToLargest.length;
  let arr3 = [];
  let value = 0;
  while (j < length) {
    value = smallToLargest[j] - smallToLargest[i];
    arr3.push(value);
    i++;
    j++;
  }

  const result = Math.min(...arr3);

  // console.log(arr3);
  // for (let i = 0; i < arr1.length; i++) {
  //   arr1[i] = smallToLargest[i];
  // }
  // console.log(arr1);
  //Calculating Unfairness
  // const result = Math.max(...arr1) - Math.min(...arr1);

  return console.log(result);
}

const k = 5;
// const arr = [10, 100, 300, 200, 1000, 20, 30];

const arr = [
  4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822,
  1784, 7802, 3142, 9739, 5629, 5413, 7232,
];

// const arr = [1, 2, 1, 2, 1];

maxMin(k, arr);

console.log(arr.length);
