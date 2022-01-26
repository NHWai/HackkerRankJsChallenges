"use strict";

/*

Jim's Burgers has a line of hungry customers. Orders vary in the time it takes to prepare them. Determine the order the customers receive their orders. Start by numbering each of the customers from 1 to n , front of the line to the back. You will then be given an order number and a preparation time for each customer.

The time of delivery is calculated as the sum of the order number and the preparation time. If two orders are delivered at the same time, assume they are delivered in ascending customer number order.

For example, there are n=5 customers in line. They each receive an order number "order[i]"  and a preparation time "prep[i]" .:




Customer	    1	 2	 3	 4 	5
Order #		    8	 5	 6	 2	4
Prep time	    3	 6	 2 	 3	3
Calculate:
Serve time   11 11	 8 	 5	7



Order by:
Serve time	 5	7	8	11	11
Customer	   4	5	3	1	  2


Return the custome

*/

function jimOrders(orders) {
  // Write your code here
  const flat = orders.map((el) => el[0] + el[1]);
  const flatString = flat.map((el, idx) => el + "-" + idx);
  const sortedFlat = flat.map((el) => el).sort((a, b) => a - b);
  const sortedFlatString = flatString
    .map((el) => el)
    .sort((a, b) => a.slice(0, a.indexOf("-")) - b.slice(0, b.indexOf("-")));
  const resultString = sortedFlatString.map(
    (el) => +el.slice(el.indexOf("-") + 1) + 1
  );
  // const result = sortedFlat.map((el) => flat.indexOf(el) + 1);
  // const uniq = result.filter((el, idx) => result.indexOf(el) === idx);
  // const a = flat.indexOf(sortedFlat[0]);
  console.log("falt", flat);
  console.log("flatString", flatString);
  console.log("sortedFlat", sortedFlat);
  console.log("sortedFlatString", sortedFlatString);
  // console.log(uniq);
  return resultString;
}

const orders = [
  [8, 1],
  [4, 2],
  [5, 6],
  [3, 1],
  [4, 3],
  [0, 0],
  [3, 4],
  [13, 4],
  [3, 24],
  [43, 4],
  [63, 4],
];

console.log(jimOrders(orders));

const text = "67-1900000";
// const fnd =
const cup = text.slice(0, text.indexOf("-"));
console.log(cup);
