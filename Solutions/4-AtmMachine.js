// https://www.codechef.com/practice/course/1-star-difficulty-problems/DIFF1200/problems/ATM2

function canWithdraw(totalPeople, totalMoney, arr) {
  let output = "";
  for (let i = 0; i < totalPeople; i++) {
    if (arr[i] <= totalMoney) {
      output = output + 1;
      totalMoney = totalMoney - arr[i];
    } else {
      output = output + 0;
    }
  }

  return output;
}

let totalPeople = 5;
let totalMoney = 10;
let arr = [3, 5, 3, 2, 1];

console.log(canWithdraw(totalPeople, totalMoney, arr));
