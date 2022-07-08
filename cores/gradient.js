const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  let hexColor2 = "#";
  let hexColor3 = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    hexColor2 += hex[getRandomNumber()];
   
  }
  // console.log(hexColor);

  color.textContent = 'linear-gradient(120deg, '+hexColor+' 0%, '+hexColor2+' 100%)';
  document.body.style.background = 'linear-gradient(90deg, '+hexColor+' 0%, '+hexColor2+' 100%)';
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}