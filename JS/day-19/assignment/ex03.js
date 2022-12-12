function findOlderStudents(array) {
  for (let i = 0; i < array.length; i++) {
    if (2022 - array[i].yearOfBirth > 20) {
      console.log(array[i].name);
    }
  }
}

function ageOfStudents(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i].name)
        console.log(2022- array[i].yearOfBirth)
    }
}

function single(array){
    for(let i = 0; i < array.length; i++){
        if(array[i].single != false){
            console.log(array[i].name)
        }
    }
}


const students = [
  {
    name: "Usukhbayar",
    yearOfBirth: 2003,
    hobby: "Video games",
    single: false,
  },
  {
    name: "Dondog",
    yearOfBirth: 2001,
    hobby: "Basketball",
    single: true,
  },
  {
    name: "Bat",
    yearOfBirth: 1999,
    hobby: "Football",
    single: false,
  },
];
findOlderStudents(students);
ageOfStudents(students);
single(students);
