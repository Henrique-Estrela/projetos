const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const num1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  let hexColor2 = "#";
  let Num = "";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    hexColor2 += hex[getRandomNumber()];
    
  }
  for (let i = 0; i < 3; i++) {
    Num += num1[getRandomNumber1()];
  }
  // console.log(hexColor);

  color.textContent = 'linear-gradient('+Num+'deg, '+hexColor+' 0%, '+hexColor2+' 100%)';
  document.body.style.background = 'linear-gradient('+Num+'deg, '+hexColor+' 0%, '+hexColor2+' 100%)';
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
function getRandomNumber1() {
  return Math.floor(Math.random() * num1.length);
}