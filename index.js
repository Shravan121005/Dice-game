var diceNum1 = Math.floor(Math.random()*6)+1;
var str1 = "./images/dice"+diceNum1+".png";
var img1 = document.querySelector(".img1");
img1.setAttribute("src",str1);

var diceNum2 = Math.floor(Math.random()*6)+1;
var str2 = "./images/dice"+diceNum2+".png";
var img2 = document.querySelector(".img2");
img2.setAttribute("src",str2);

var header = document.querySelector("h1");

if(diceNum1>diceNum2){
    header.textContent = "Player 1 Wins!";
}
else if(diceNum1<diceNum2){
    header.textContent = "Player 2 Wins!"; 
}
else{
    header.textContent = "Draw!!";
}
