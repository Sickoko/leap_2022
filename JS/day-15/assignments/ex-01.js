let num = [1, 2, 5, 3, 5, 6, 7, 8];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    console.log(num[i]);
  }
}

// let playerNames = ["salah", "mane", "becker", "diaz"];

// console.log(playerNames);
// playerNames[1] = "khangai";
// console.log(playerNames);

let numbers = [1, 2, 5, 3, 5, 6, 7, 8];
console.log(numbers)
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] + 1;
}
console.log(numbers)
