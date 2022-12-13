console.log("bom js");
console.log("window");
// window.alert("hello")
// window.open("https://google.com", "Hello");
// CONFIRM
// window.confirm("hello")

// let result = window.confirm("Do you want to quit");
// console.log(result);
// let result   = confirm("Та устгахдаа итгэлтэй байна уу ?");
// let message = result ? "Та OK товчийг дарлаа" : "Та Cancel товчийг дарсан";
// alert(message);
let alertButton = document.getElementById("alertButton");
let cancelButton = document.getElementById("cancelButton");
let timeoutID;
alertButton.addEventListener("click", () => {
  timeoutID = setTimeout(alert, 3000, "setTimeout Demo!");
});

cancelButton.addEventListener("click", () => {
  console.log(timeoutID);
  clearTimeout(timeoutID);
});
console.log(timeoutID);

setTimeout(() => {
  console.log("Timeout is running");
}, 5000);

let counter = 0;
// setInterval(startInterval, 1000);
let myButton = document.getElementById("timerBtn");
myButton.addEventListener("click", runTimerInterval);

function runTimerInterval() {
  window.setInterval(startInterval, 1000);
}

function startInterval() {
  let now = new Date();
  let myTimer = document.getElementById("myTimer");
  myTimer.innerHTML = now.getSeconds();
  console.log(counter);
  counter++;
}