"use strict";
function getMinimumCost(k, c) {
  const largestToSmall = c.map((el) => el).sort((a, b) => b - a);
  let sum = 0;

  if (c.length === k) {
    for (let i = 0; i < k; i++) {
      sum = sum + smallToLarge[i];
    }
  }

  if (c.length > k) {
    let j = 0;
    let i = 0;
    let m = 0;
    while (i < c.length) {
      console.log("j=", j);
      sum = sum + (j + 1) * largestToSmall[i];
      i++;
      if (m === k - 1) {
        m = 0;
        j++;
      } else m++;
    }
  }
  return sum;
}

const k = 3;
const c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// k = number of people who buy flowers
// c = prices of each flower
// c.length = number of flowers to be bought
// Rules --> if a man buy any flower after buying the first one of any kind, the price of the flower is ....
// 2nd time.................(1 + 1 ) * original rate
// 3rd time...................(2 + 1 ) * original rate
// 4th time...................(3 + 1 ) * original rate

console.log(getMinimumCost(k, c));
