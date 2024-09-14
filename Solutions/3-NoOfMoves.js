function noOfMoves(health, normalAttack, speacialAttack) {
  let moves = 0;
  if (speacialAttack <= health) {
    health = health - speacialAttack;
    moves++;
  }
  const normalMoves = Math.ceil(health / normalAttack);
  moves = moves + normalMoves;
  return moves;
}
let monsterHealth = 100;
let normalAttackDamage = 29;
let specialAttackDamage = 45;

console.log(noOfMoves(monsterHealth, normalAttackDamage, specialAttackDamage));
