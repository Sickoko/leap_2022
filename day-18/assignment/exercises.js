//Ex01 - JS Methods

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);
if (shoppingCart.includes("Meat") == false) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);
if (shoppingCart.includes("Sugar") == false) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);
console.log("Remove Honey");
console.log(shoppingCart.indexOf("Honey"));
console.log(shoppingCart.splice(4, 1));
console.log(shoppingCart);

shoppingCart.splice(3, 1, "Green Tea");
console.log(shoppingCart);

//EX02 -JS Methods

let array = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
array.sort();
console.log(array);

//reverse
const array1 = array.reverse();
console.log("reversed:", array1);

//remove first company
console.log("first company");
console.log(array.length);
array.splice(0, 1);
console.log(array);
//Remove middle company
console.log("middle company");
array.length / 2;
array.length / 2 - 1;
array.splice(2, 2);
console.log(array);

//Remove the last company
console.log("last company");
console.log(array.length);
array.splice(3, 1);
console.log(array);

//Remove all the companies
console.log("Remove all the companies");
array.splice(0, 3);
console.log(array);

//Ex03 JS Methods

// let carBrands = [
//   ["Aston Martin Lagonda Ltd", "UK", 2016],
//   ["Audi", "Germany", 2016],
//   ["BMW", "Germany", 2016],
//   ["Chevrolet", "USA", 2016],
//   ["Dodge", "USA", 2016],
//   ["Ferrari", "Italy", 2016],
//   ["Honda", "Japan", 2016],
//   ["Jaguar", "UK", 2016],
//   ["Lamborghini", "Italy", 2016],
// ];

//Ex04 JS Methods

let number = 45361;
const num = number.reverse();
console.log('reversed:', num);

