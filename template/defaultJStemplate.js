let stdInput = "";
process.stdin.on("data", (input) => (stdInput += input));
process.stdin.on("end", () => {
  const input = stdInput.trim().split("\n");
  const testCases = parseInt(input[0]);
  for (let i = 1; i <= testCases; i++) {
    const [arg1, arg2] = input[i].split(" ").map(Number);

    //Call your function here
    console.log(fnName(arg1, arg2));
  }
});

function fnName(param1, param2) {
  return 1;
}
