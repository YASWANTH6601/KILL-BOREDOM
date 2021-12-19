var Player=prompt("Enter your name");
var score1=0;
var score2=0;

document.querySelector(".p1").innerHTML=Player;

function gen(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML= "🚩"+Player+" Wins!";
  score1=score1+1;
  document.querySelector(".p11").innerHTML= "Score="+score1;
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Computer Wins! 🚩";
  score2=score2+1;
  document.querySelector(".p22").innerHTML= "Score="+score2;
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
}
