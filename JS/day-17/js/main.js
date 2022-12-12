function pow(number, exponent) {
  let multiply = 1;
  for (let i = 1; i <= exponent; i++) {
    multiply = multiply * number;
  }
  return multiply;
}
let result = pow(2, 3);
console.log(result);
console.log(pow(2, 4));
console.log(pow(5, 2));

console.log(Math.pow(4, 3));
console.log(pow(4, 3));

function findMin(max, min) {
  if (max > min) {
    console.log(true);
  } else {
    console.log(false);
  }
  return min;
}
findMin(4, 2);

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

let array = [1, 2, 3, 4, 5, 6, 7];
printArray(array);

39;

let arr = [1, 2, 3, 4, 5, 6, 7, 100];
// let largest = arr[0]
let findArrayMax = function (array) {
  let max = -1;
  for (let i = 0; i < array.length; i++) {
    if (max <= array[i]) {
      max = array[i];
    }
  }
  return max;
};
console.log(findArrayMax(arr));

//average
let findArrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  const average = sum / arr.length;
  //need average
  return average;
};
console.log(findArrayAverage(array));

function findOntsDumd(points) {
  if (points < 60) {
    return "Very bad";
  } else if (points >= 60 && points < 70) {
    return "Satisfied";
  } else if (points >= 70 && points < 80) {
    return "Average";
  } else if (points >= 80 && points < 90) {
    return "Good";
  } else if (points >= 90 && points < 100) {
    return "Very Good";
  } else {
    return "Please give me points between 0 and 100";
  }
}
let inputPoint = Number(prompt('Give me student point'));
let inputStudentName = prompt('Give me student name');
let pointResult = findOntsDumd(inputPoint);
console.log(`${inputStudentName} - ${inputPoint} - ${pointResult}`);
