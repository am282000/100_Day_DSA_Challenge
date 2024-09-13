// Question Link: https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/AMR15A?tab=statement

//Without inbuilt method

function battleStatus(n, weaponsEquipped) {
  let soldiersHoldingOddWeapons = 0;
  let soldiersHoldingEvenWeapons = 0;

  for (let i = 0; i < weaponsEquipped.length; i++) {
    const isEven = weaponsEquipped[i] % 2 === 0;
    if (isEven) soldiersHoldingEvenWeapons++;
    else soldiersHoldingOddWeapons++;
  }

  if (soldiersHoldingEvenWeapons > soldiersHoldingOddWeapons) {
    return "READY FOR BATTLE";
  } else {
    return "NOT READY FOR BATTLE"; // Even both are equal ,they  are not ready
  }
}

let n = 5; // No of soldiers
let weaponsEquipped = [1, 2, 5, 6, 9];

console.log(battleStatus(n, weaponsEquipped));

//With inbuilt method

// function battleStatus(n, weaponsEquipped) {
//   const evenCount = weaponsEquipped.filter((p) => p % 2 === 0).length;
//   const oddCount = n - evenCount;
//   return evenCount > oddCount ? "READY FOR BATTLE" : "NOT READY FOR BATTLE";
// }

// let n = 5; // No of soldiers
// let weaponsEquipped = [1, 2, 5, 6, 10];
// console.log(battleStatus(n, weaponsEquipped));
