"use strict";

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function

  // ............Method_1 (Using ecma6 methods).......................
  // const largest = Math.max(...nums);
  // const nums2 = nums.filter((num) => num < largest);
  // const secondLargest = Math.max(...nums2);

  // ..........Method_2 (Using Fundamental 'for' Loop).................
  let largest = nums[0];
  let secondLargest = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest;
}

const arr = [8, 7, 2, 9, 11, 13, 3];

console.log(getSecondLargest(arr));
