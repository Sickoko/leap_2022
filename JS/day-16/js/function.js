console.log('my function')


function f(){
    console.log('Hello functions')
}
f();

function f1 (x){
    console.log(Math.pow(x, 2))
}
f1(2)

function f2 (x, y){
    console.log(Math.pow(x + y, 2))
}
f2(2,2);

function E(m, c){
    console.log(m * Math.pow(c, 2))
}
const c = 300000;

E(105, c)

function factorial(x){
    let multiplication = 1;
    for(let i = 1; i <= x; i++){
        multiplication = multiplication * i;
    }
    console.log(multiplication)
}
factorial(5)

function f3 (x, y){
    console.log(Math.pow(x, 2 + y, 2))
}
f3(2,2)

function isEven(x){
    if(x % 2 == 0){
        console.log("It is a even number")
    }else {
        console.log("It is an odd number")
    }
}
isEven()

