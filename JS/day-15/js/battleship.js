// /**
//  * Game setup
//  *
//  * user should guess a number 6 times

// for (let count = 0; count < str.length; count++) {
//     console.log(str.charAt(count));
//   }
//  */

let guesses = 0;
let hit = 0;
let count = 0;
let isSunk = false;

// let location1 = 2;
// let location2 = 3;
// let location3 = 4;
let locations = [false, true, true, true, false, false, false];
// console.log(locations.length)

for(let count = 0; count < locations.length; count++ ) {
    console.log(locations[count]);
}


while (!isSunk) {
  console.log("game begins");
  let = userGuess = Number(prompt("Guess the position"));
  guesses = guesses + 1;
  if(guesses > 6 ){
    // alert('game over')
    console.log(guesses);
    break;
  }
  if (userGuess > 0 && userGuess < 7) {
    console.log(userGuess);
    if (
      location1 == userGuess ||
      location2 == userGuess ||
      location3 == userGuess
    ) {
      hit = hit + 1;
      alert('hit')
      if (location1 == userGuess) {
        location1 = -1;
      }
      if (location2 == userGuess) {
        location2 = -1;
      }
      if (location3 == userGuess) {
        location3 = -1;
      }
    } else{
        alert('missed')
    }
    console.log(hit);
    if (hit == 3) {
    //   alert('You win')
      isSunk = true;
    }
  }
}
if (isSunk && guesses < 6){
    alert('You win');
} else if(guesses > 6){
    alert('You lose')
} else ('You lose')
console.log("game ends");

