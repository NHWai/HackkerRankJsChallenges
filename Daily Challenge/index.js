"use strict";
const arr = [1, 2, 3, 21, 7, 12, 14, 21];

function toy(w) {
  const wSort = w.map((e) => e).sort((a, b) => a - b);
  const target = wSort[0] + 4;
  let lastInArray = wSort[wSort.length - 1];
  let i = 1;

  function lowestCostWay() {
    return rep(target);
  }

  function rep(tt) {
    if (tt >= lastInArray) return i;
    if (tt < lastInArray) {
      i++;
      let idx = wSort.findIndex((el) => el > tt);
      console.log(wSort[idx]);
      let td = wSort[idx] + 4;
      return rep(td);
    }
  }

  return lowestCostWay();
}

console.log(toy(arr));

console.log("hello wrld");

/* 

*/
