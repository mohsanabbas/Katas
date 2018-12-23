let moveZeros = function (arr) {
  // TODO: Program me
  let arrayOfZero = arr.filter(element => element === 0);
  let arrayofNonZero = arr.filter(element => element !== 0);

  return [...arrayofNonZero, ...arrayOfZero];
};

console.log(moveZeros([1, 2, 0, 1, 0, 1,0,0,0,0,0,00,0054,654,56465,465,4]));