console.log(Math.floor(Math.random() * 100));
//(max - min + 1)) + min
console.log(Math.floor(Math.random() * (255 - 50 + 1) + 50 ));

let max = Number(prompt("give a number"));
let count = 1;

let sum = 0;

while (count <= max) {
  count = count + 1;
  sum = sum + count;
  console.log(count);
  console.log(sum);
}

