"use strict";
function unboundedKnapsack(k, arr) {
  // Write your code here

  // create a lookup table
  // lookup[i] is going to store maximum value
  // with knapsack capacity i.
  const lookup = new Array(k + 1).fill(0);

  // fill lookup[] using above recursive formula
  for (let i = 0; i < lookup.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] <= i) {
        lookup[i] = Math.max(lookup[i], lookup[i - arr[j]] + arr[j]);
      }
    }
  }

  return console.log(lookup[k]);
}

function boundedKnapsack(k, arr) {
  const lookup = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      // console.log("k=", k, " i=", i, " arr[i]=", arr[i]);
      lookup[i] = arr[i];
      k = k - arr[i];
      // console.log("after subtracting the k, k=", k);
    }
    lookup[i] = i === 0 ? lookup[i] : lookup[i] + lookup[i - 1];
    // console.log("lookup[i]=", lookup[i]);
  }

  return console.log(lookup[arr.length - 1]);
}

const arr = [2, 2, 6, 6];
const target = 12;
unboundedKnapsack(target, arr);
boundedKnapsack(target, arr);
