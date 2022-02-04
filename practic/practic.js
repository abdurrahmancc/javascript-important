function calculetor(name1, name2) {
  let number = Math.random() * 100;
  number = Math.floor(number) + 1;
  let love = name1 + " and " + name2 + "'s love percentage" + number;
  return love;
}
let names = calculetor("farhan", "faria");
console.log(names);
