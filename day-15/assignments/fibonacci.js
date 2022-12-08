let F1 = 0;
let F2 = 1; 
let n = 0; 
let m = prompt('Give me your range');
while(n <= m){
    let F3 = F1 + F2;
    F1 = F2; 
    F2 = F3;
    n = n + 1;
    console.log(F3)
}