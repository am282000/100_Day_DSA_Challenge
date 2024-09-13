function bottleExchange(initialBottles, exchangeRate) {
  let totalBottles = initialBottles;
  let emptyBottles = initialBottles;

  while (emptyBottles >= exchangeRate) {
    const newBottles = Math.floor(emptyBottles / exchangeRate);
    totalBottles += newBottles;
    emptyBottles = (emptyBottles % exchangeRate) + newBottles;
  }
  return totalBottles;
}
console.log(bottleExchange(10, 2));

