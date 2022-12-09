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

//ex-3

function findOlderStudents(students) {
  for (let i = 0; i < array.length; i++) {
    if (2022 - students.yearOfBirth > 20) {
      console.log(students.name);
    }
  }
}

const students = [
  {
    name: "Usukhbayar",
    yearOfBirth: 2003,
    hobby: "Video games",
    single: true,
  },
  {
    name: "Dondog",
    yearOfBirth: 2001,
    hobby: "Basketball",
    single: false,
  },
  {
    name: "Bat",
    yearOfBirth: 1999,
    hobby: "Football",
    single: false,
  },
];
