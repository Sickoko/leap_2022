//assignment-day14

// let count = 0;
// let num = prompt("Give me a number");

// while (count < num.length) {
//   sum = sum + Number(num.charAt(count));
//   count = count + 1;
// }
// console.log(sum);

let rem = 0,
  n = Number(prompt("give a number")),
  sum = 0;
// while (n > 0) {
//   rem = n % 10;
//   sum = sum + rem;
//   n = Math.floor(n / 10);
// }

for (; n > 0; ) {
  rem = n % 10;
  sum = sum + rem;
  n = Math.floor(n / 10);
}
console.log(sum);
