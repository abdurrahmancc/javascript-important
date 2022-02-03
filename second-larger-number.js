function secondLarges(number) {
  let firstLarge = [0];
  let secondLarge = [0];
  for (let element of number) {
    if (element > firstLarge) {
      secondLarge = firstLarge;
      firstLarge = element;
    }
  }
  return secondLarge;
}
const numbers = [33, 333, 43, 42, 343, 54];
let secondLargeNumber = secondLarges(numbers);
console.log(secondLargeNumber);
