function rollDice(dice) {
  const randomIndex = Math.floor(Math.random() * dice.length);
  return dice[randomIndex]; // Returns a random value from the dice array
}

function getMaxTwoSum(rolls) {
  rolls.sort((a, b) => b - a);
  return rolls[0] + rolls[1]; // Sum the two highest values
}

function findWinner(noOfPlayers, dice, rollTimes) {
  let highestSum = 0;
  let winner = 0;

  for (let i = 1; i <= noOfPlayers; i++) {
    // Each player rolls the dice `rollTimes` times
    let rolls = [];
    for (let j = 0; j < rollTimes; j++) {
      rolls.push(rollDice(dice));
    }
    console.log(`Player ${i} rolls: ${rolls}`);

    // Get the sum of the 2 highest rolls
    let sum = getMaxTwoSum(rolls);
    console.log(`Player ${i} sum of top 2 rolls: ${sum}`);

    // Check if this player has the highest sum so far
    if (sum > highestSum) {
      highestSum = sum;
      winner = i;
    }
  }

  console.log(`Player ${winner} wins with a sum of ${highestSum}`);
  return winner;
}

// // Example usage with n players, custom dice and rollTimes
const dice = [1, 2, 3, 4, 5, 6]; // Dice with values from 1 to 6
const rollTimes = 3; // Each player rolls the dice 3 times
const noOfPlayers = 3; // Number of players

console.log("Winner is Player: ", findWinner(noOfPlayers, dice, rollTimes));
