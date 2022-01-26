"use strict";

var bubbleDown = (arr, i, n) => {
  let childToSwap = 2 * i + 1;
  while (childToSwap < n) {
    if (2 * i + 2 < n) {
      if (arr[2 * i + 2] > arr[childToSwap]) {
        childToSwap = 2 * i + 2;
      }
    }
    if (arr[childToSwap] > arr[i]) {
      let temp = arr[childToSwap];
      arr[childToSwap] = arr[i];
      arr[i] = temp;
      i = childToSwap;
      childToSwap = 2 * i + 1;
    } else break;
  }
};

var heapify = (arr) => {
  let n = arr.length;
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    bubbleDown(arr, i, n);
  }
};

var pop = (arr) => {
  if (arr.length == 0) return -1;
  if (arr.length == 1) return arr.pop();
  let rs = arr[0];
  arr[0] = arr.pop();
  bubbleDown(arr, 0, arr.length);
  return rs;
};

// Complete the boardCutting function below.
function boardCutting1(cost_y, cost_x) {
  heapify(cost_y);
  heapify(cost_x);
  let segmentX = 1,
    segmentY = 1;
  let totalCost = 0;
  let totalCut = cost_x.length + cost_y.length;
  let maxX = pop(cost_x);
  let maxY = pop(cost_y);
  for (let i = 0; i < totalCut; i++) {
    if (maxX > maxY) {
      totalCost += segmentY * maxX;
      segmentX++;
      maxX = pop(cost_x);
    } else {
      totalCost += segmentX * maxY;
      segmentY++;
      maxY = pop(cost_y);
    }
    totalCost = totalCost % (Math.pow(10, 9) + 7); //make sure number is not too big
  }
  return totalCost;
}

function boardCutting(cost_y, cost_x) {
  // Write your code here

  const m = cost_y.length;
  const n = cost_x.length;
  // console.log(m, n);

  const cost_ySort = cost_y.map((el) => el).sort((a, b) => b - a);
  const cost_xSort = cost_x.map((el) => el).sort((a, b) => b - a);
  // console.log(cost_ySort, cost_xSort);
  // console.log("m=", m, " n=", n);
  let hrizonSeg = 1;
  let verSeg = 1;
  let i = 0;
  let j = 0;
  let res = 0;

  while (i < m && j < n) {
    if (cost_ySort[i] > cost_xSort[j]) {
      res += cost_ySort[i] * verSeg;
      i++;
      hrizonSeg++;
    } else {
      res += cost_xSort[j] * hrizonSeg;
      j++;
      verSeg++;
    }
    // console.log(
    //   "res=",
    //   res,
    //   " i=",
    //   i,
    //   " cost_ySort[i]=",
    //   cost_ySort[i],
    //   " j=",
    //   j,
    //   " cost_xSort[j]=",
    //   cost_xSort[j]
    // );
  }

  let total = 0;

  while (i < m) {
    total += cost_ySort[i++];
  }

  res += total * verSeg;

  total = 0;
  while (j < n) {
    total += cost_xSort[j++];
  }
  res += total * hrizonSeg;

  res = res % (Math.pow(10, 9) + 7);
  return res;
}

// function boardCutting2(cost_y, cost_x) {
//   const m = cost_y.length;
//   const n = cost_x.length;
//   // console.log(m, n);

//   const cost_ySort = cost_y.map((el) => el).sort((a, b) => b - a);
//   const cost_xSort = cost_x.map((el) => el).sort((a, b) => b - a);

//   let i = 0;
//   let j = 0;
//   let res = 0;
//   let hriz = 1;
//   let ver = 1;

//   if (cost_ySort[i] > cost_xSort[j]) {
//     res += cost_ySort[i] * ver;
//     i++;
//     hriz++;
//   return res;
//   }

//   if(cost_ySort)
// }

// const yArr = "2 1 3 1 4";
// const xArr = "4 1 2";

// const cost_y = new Array(80).fill(66);
// const cost_x = new Array(18).fill(54);

const yArr =
  "755713 3544575 8115800 7197250 1823797 2545988 1655670 6243892 3526231 6378000 2287606 9688193 7434475 7493013 302200 2310408 3015656 8229176 3679477 3020146 5416404 1478690 3716633 7559872 8658330 5616329 6260944 1579795 1527580 3872372 7823162 2283294 7416948 5938963 9480544 9240745 1001303 3652567 5484637 4527534 2546919 288596 6732080 9981395 297961 9550632 4808155 3313617 7779809 8487632 8850115 5712565 2482674 2566748 3272438 3657356 699430 9533382 7753503 4743362 3405755 8093017 7026656 3339055 4031980 9023553 2579800 5033283 2676120 580790 2077170 5223039 869386 1325602 7720786 1167347 876234";

const xArr =
  "2528941 6997316 8656043 3532925 5847431 6884961 8531951 930531 157399 4705659 4146313 2207133 2459162 8889676 8129240 552180";

const cost_y = chgArr(yArr);
const cost_x = chgArr(xArr);

console.log(boardCutting(cost_y, cost_x));

function chgArr(arr) {
  return arr.split(" ").map((el) => +el);
}

/*
Test Cases

5
63 32
7 69 87 54 1 27 92 58 24 86 16 18 14 68 65 24 37 66 78 14 27 72 23 65 9 43 45 3 7 59 33 66 28 20 20 29 99 12 39 23 51 55 94 17 23 11 93 60 77 72 26 57 96 2 22 58 45 68 61 4 27 47
70 7 19 42 36 19 7 27 94 58 82 40 27 57 51 21 69 81 93 96 38 41 50 60 99 47 28 61 52 7 60
81 19
66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66
54 54 54 54 54 54 54 54 54 54 54 54 54 54 54 54 54 54
83 99
24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24 24
34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34 34
39 63
72 41 82 42 22 27 90 60 69 40 72 20 87 53 81 91 60 93 66 79 25 35 33 75 11 15 24 45 30 14 58 3 55 41 45 29 20 87
89 41 27 13 62 66 66 95 10 79 41 28 58 66 63 91 93 74 58 18 71 41 32 29 44 39 22 41 68 43 28 9 36 7 22 50 25 89 98 35 20 39 63 78 5 78 21 98 52 80 68 75 21 52 5 17 91 27 10 11 22 38
99 49
11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11
61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61





Ans:
63151
84012
198164
82960
55750

*/
