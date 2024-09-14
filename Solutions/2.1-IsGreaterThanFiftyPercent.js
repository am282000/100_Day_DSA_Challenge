function isGreaterThanFiftyPercent(x, y, z) {
  const fiftyPercent = (x * y) / 2;
  return z > fiftyPercent ? "YES" : "NO";
}
const school = 3;
const studentPerSchool = 6;
const studentPassed = 9;
console.log(isGreaterThanFiftyPercent(school, studentPerSchool, studentPassed));
