//  https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/REACHFAST

function findNoOfSteps(startingPoint, endingPoint, steps) {
  if (startingPoint === endingPoint) return 0;
  const distanceToCover = Math.abs(endingPoint - startingPoint);
  return Math.ceil(distanceToCover / steps);
}

let startingPoint = 36;
let endingPoint = 36;
let steps = 0;

console.log(findNoOfSteps(startingPoint, endingPoint, steps));
