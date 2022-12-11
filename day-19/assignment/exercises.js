function whatDoesTheFoxSay(array, animalType) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].type == animalType) {
      console.log(`${array[i].sound} - ${array[i].sound} - ${array[i].sound}`);
    }
  }
}

let animals = [
  {
    type: "dog",
    sound: "woof",
  },
  {
    type: "cow",
    sound: "moo",
  },
  {
    type: "cat",
    sound: "meow",
  },
];

console.log("Dog barking");
whatDoesTheFoxSay(animals, "dog");
console.log("Cow moo-ng");
whatDoesTheFoxSay(animals, "cow");
console.log("Cat meowing");
whatDoesTheFoxSay(animals, "cat");

