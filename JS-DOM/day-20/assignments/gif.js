const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};
btn.addEventListener("click", setBg);
setBg();
const txtColor = () =>{
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('btn').style.color = "#" + randomColor;
}
btn.addEventListener("click", txtColor);
txtColor();
