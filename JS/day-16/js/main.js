let array = [1, 4, 5, 6, 8, 10, 3, 2, 10, 9, 8];
console.log(array);
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    array[i] = array[i] + 4;
  } else {
    array[i] = array[i] - 5;
  }
}
console.log(array);

// function isEven(x){
//   if(x % 2 == 0){
//       console.log("It is a even number")
//   }else {
//       console.log("It is an odd number")
//   }
// }
// isEven(array[0])

function addTwoNumbers(x, y) {
  return x + y;
}
console.log(addTwoNumbers(4, 5));

function multiplyTwoNumbers(x, y) {
  return x * y;
}
console.log(multiplyTwoNumbers(4, 5));

function multiplyThreeNumbers(x, y, z) {
  const m = x * y * z;
  return m;
}
const result = multiplyThreeNumbers(4, 5, 6)
console.log(result)
