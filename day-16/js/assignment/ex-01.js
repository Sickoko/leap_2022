let x = 5;
let y = 6;
// if (x < y){
//     console.log(y + ' is bigger than '+ x)
// }else {
//     console.log(x + 'is bigger than' + y)
// }

function findMax(x, y) {
  if (x < y) {
    console.log(y + " is bigger than " + x);
  } else {
    console.log(x + " is bigger than " + y);
  }
}

findMax(Number(prompt('Give a number')),Number(prompt('Give another number')))