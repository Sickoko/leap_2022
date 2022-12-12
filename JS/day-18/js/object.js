console.log("lesson objects");
let rabbit1 = {
  color: "white",
  rName: "Bunny",
  gender: "Male",
  age: 2,
  jump: function(){
    console.log('Sorry i broke my leg i cant jump');
  },
  sayMyName: function(myName){
    console.log(`Your name is ${myName}`);
  }
};
console.log(rabbit1);
rabbit1.color = 'Brown'
console.log(rabbit1.color)
rabbit1.jump()
rabbit1.sayMyName(`Usukhuu`)


console.log('')
console.log('Rabbit2')
let rabbit2 = {
  color: "Gray",
  rName: "bRabbit",
  gender: "Female",
  age: 1,
  jump: function(){
    console.log('I can jump');
  }
};

console.log(rabbit2);
let rabbits = [rabbit1, rabbit2];
console.log(rabbits);
rabbit2.jump()
