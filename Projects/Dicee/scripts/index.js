function randomNumber(){
  return Math.floor(Math.random()*6)+1
}

function rollAllDice(){
  var dice1Value = randomNumber();
  var dice2Value = randomNumber();
  return [dice1Value,dice2Value];
}

function updateDispayedDice(){
  rollAllDice();
  let allDice = rollAllDice();
  var dice1Value = allDice[0];
  var dice2Value = allDice[1] ;
  document.querySelector(".img1").src = "images/dice" + allDice[0] + ".png";
  document.querySelector(".img2").src = "images/dice" + allDice[1] + ".png";

  if(dice1Value > dice2Value){
    document.querySelector("h1").innerText = "Player 1 Wins!";
    player1Score++;
    document.querySelector("#player1Score").innerText = "Player 1: " + this.player1Score;
  }
  else if(dice1Value < dice2Value){
    document.querySelector("h1").innerText = "Player 2 Wins!";
    player2Score++;
    document.querySelector("#player2Score").innerText = "Player 2: " + this.player2Score;
  }
  else{
    document.querySelector("h1").innerText =  "Roll Again!!";
  }
}

var player1Score = 0;
var player2Score = 0;
