console.log("exercises");

console.log(document.getElementById("aimag-101"));
console.log(document.getElementById("aimag-522").innerHTML);
console.log(document.getElementById("aimag-101").innerHTML);
console.log(document.getElementById("aimag-315").innerHTML);
// document.getElementById("aimagNames").style = "font-size:20px";
document.getElementById("aimag-101").style = "color: green";
document.getElementById("aimag-202").style = "color: blue";
document.getElementById("aimag-103").style = "color: red";
document.getElementById("aimag-104").style = "color: cyan";
document.getElementById("aimag-205").style = "color: aquamarine";
document.getElementById("aimag-406").style = "color: #32a852";
document.getElementById("aimag-407").style = "color: #00ffea";
document.getElementById("aimag-408").style = "color: #870080";

for (let i = 0; i < document.getElementsByClassName("khangai").length; i++) {
  document.getElementsByClassName("khangai")[i].style =
    "background-color: beige";
}

for (let i = 0; i < document.getElementsByClassName("baruun").length; i++) {
  document.getElementsByClassName("baruun")[i].style =
    "background-color: #b2de8c";
}
for (let i = 0; i < document.getElementsByClassName("zuun").length; i++) {
  document.getElementsByClassName("zuun")[i].style =
    "background-color: #e88484";
}
for (let i = 0; i < document.getElementsByClassName("tuv").length; i++) {
  document.getElementsByClassName("tuv")[i].style = "background-color: #f5af00";
}

console.log(document.getElementById("aimagNames").id);
const liLength = document
  .getElementById("aimagNames")
  .getElementsByTagName("li").length;
console.log(
  document.getElementById("aimagNames").getElementsByTagName("li")[liLength - 1]
    .innerHTML
);
// for(let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++){
//     if (document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-1')){
//         document.getElementById('aimagNames').getElementsByTagName('li')[i].style='background-color: black'
//     }
// }

document.getElementsByTagName("span")[0].innerHTML = "ITS A DUMMY";

console.log(document.querySelector("#aimagNames"));
console.log(document.querySelector(".khangai"));
console.log(document.getElementsByClassName("khangai"));
console.log(document.querySelectorAll(".khangai"));
console.log((document.querySelector("#demo").innerHTML = "Date : " + Date()));
document.querySelector("img").src = "./img/doggydogg.jpg";
document.querySelector("img").style = "width: 500px; padding-left: 50px"
document.querySelector('.profileName').style.color= 'red'


const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("body");
const h1 = document.querySelector('h1');
h1.appendChild(newDiv);
