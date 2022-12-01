// let a = "hi";
// let b = "hi";
// console.log(a < b);

// console.log(a == b);

// console.log(a === b);

// let c = 10;
// let d = "10";
// console.log(c == d);
// console.log(c === d);
// console.log(c !== d);

// let e = true;
// let f = false;

// console.log(e < f);
// console.log(e > f);

// let result = 10;

// if (result > 10) {
//   console.log("more than 10");
// } else {
//   console.log("less than 10");
// }

// result > 10 ? console.log("more than 10") : console.log("less than 10");

// const tip1 = 3000;
// const tip2 = 27500;
// const tip3 = 100000;

// let tipResult2 =
//   5000 >= tip2 && 30000 <= tip2 ? tip2 * 0.15 + tip2 : tip2 * 0.2 + tip2;
// console.log(tipResult2);

// let tipResult =
//   4000 <= tip1 && 30000 < tip1 ? tip1 * 0.15 + tip1 : tip1 * 0.2 + tip1;
// console.log(tipResult);
// let tipResult3 =
//   4000 <= tip3 && 30000 < tip3 ? tip3 * 0.15 + tip3 : tip3 * 0.2 + tip3;
// console.log(tipResult3);

// // idk

// const studentPoint = Number(prompt("Give me your score"));
// const studentName = prompt("give me your student name");

// let studentResult = ""
// if (studentPoint < 60) {
//   StudentResult = " Маш муу";
// } else if (studentPoint >= 60 && studentPoint < 70) {
//   StudentResult = " Хангалттай"
// }else if(studentPoint >= 70 && studentPoint < 80){
//   StudentResult = " Дунд"
// } else if(studentPoint >= 80 && studentPoint < 90){
//   StudentResult = " Сайн"
// } else if(studentPoint >= 90 && studentPoint < 100){
//   StudentResult = " Маш сайн"
// }
// alert(studentName + '-' + studentPoint + '-' + studentResult)

// console.log(`${studentName} - ${studentPoint} - ${StudentResult}`);

// const str = "Life, the universe and everything.";
// console.log(str.length);

// const registerNumber = prompt("Give me your register");

// if (registerNumber.length != 10) {
//   alert("The Register number isnt correct");
// } else {
//   alert("The register number is correct");
// }
// console.log(registerNumber.charAt(0));
// console.log(registerNumber[1]);
// console.log(registerNumber.substr(2, 9));
// const registerChar = registerNumber.substr(0, 1);
// const registerNum = registerNumber.substr(2, 9);

// if (!Number.isInteger(Number(registerChar)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10) {
//   alert("Your register characters are correct");
// } else {
//   alert("Your register characters are wrong");
// }

// console.log(Number("abc"));
// console.log(Number.isInteger(Number("abc")));
// console.log(Number("12312345"));
// console.log(Number.isInteger(Number("12312345")));

// .charAt(index) str[index]
// console.log(str.charAt(0));
// console.log(str[1]);
// console.log(str.toLowerCase());

// let firstName = "John";
// let fullName = firstName.concat(" ", "Smith");
// console.log(fullName);
// console.log(firstName);

const PhoneNumber = prompt("Give me your Phone Number");

const PhoneChar = PhoneNumber.substr(0);
const Phonenum = PhoneNumber.substr(1, 4);
const PhoNum = PhoneNumber.substr(5``   , 12);

if (
  !Number.isInteger(Number(PhoneChar)) &&
  Number.isInteger(Number(Phonenum)) &&
  Number.isInteger(Number(PhoNum)) &&
  PhoneNumber.length == 12
) {
  alert("Tа монгол улсын утасны дугаарыг зөв орууллаа ");
} else {
  alert("Tа монгол улсын утасны дугаарыг буруу орууллаа ");
}
