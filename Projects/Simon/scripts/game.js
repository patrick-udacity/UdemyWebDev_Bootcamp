var delayInMilliseconds = 1000; //1 second

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var responsePattern = [];
var randomChosenColor = buttonColors[nextSequence()];
var started = false;
var level = 1;
function nextSequence() {
  return Math.floor(Math.random() * 4);
}

function playSound(soundFileName) {
  var audio = new Audio("sounds/" + soundFileName + ".mp3");
  audio.play();
}

function displaySequence(gamePattern) {
  var i;
  for (i = 0; i < gamePattern.length; i++) {
    $("#" + gamePattern[i]).fadeOut(150);
    notePause(100);
    playSound(gamePattern[i]);
    $("#" + gamePattern[i]).fadeIn(200);

  }
}

// $("#level-title").click(() => {
//   randomChosenColor = buttonColors[nextSequence()];
//   gamePattern.push(randomChosenColor);
//   displaySequence(gamePattern);
// });

displaySequence(gamePattern);
$(document).ready(function () {
  $("#btnSubmit").click(function () {
    alert("button");
  });
});

$("#green").click(function () {
  responsePattern.push("green");
  $("#green").fadeIn(100).fadeOut(100).fadeIn(100);
  playSound("green");
});
$("#red").click(function () {
  responsePattern.push("red");
  playSound("red");
  $("#red").fadeIn(100).fadeOut(100).fadeIn(100);
});
$("#blue").click(function () {
  responsePattern.push("blue");
  playSound("blue");
  $("#blue").fadeIn(100).fadeOut(100).fadeIn(100);
});
$("#yellow").click(function () {
  responsePattern.push("yellow");
  playSound("yellow");
  $("#yellow").fadeIn(100).fadeOut(100).fadeIn(100);
});

$(document).on("click", displaySequence(gamePattern));

$(document).keypress(function (event) {
  if (!started && (event.keyCode === 32)) {
    gamePattern = [];
    responsePattern = [];
    randomChosenColor = buttonColors[nextSequence()];
    gamePattern.push(randomChosenColor);
    displaySequence(gamePattern);
    started = true;
    $("#level-title").text("Press the SpaceBar to Submit your Response!");
  } else if(event.keyCode === 32) {
    if (JSON.stringify(gamePattern) == JSON.stringify(responsePattern)) {
      level += 1;
      randomChosenColor = buttonColors[nextSequence()];
      gamePattern.push(randomChosenColor);
      displaySequence(gamePattern);
      responsePattern = [];
      $("#level-title").text("Level " + level +": Press the SpaceBar to Submit your Response!");
  
    }
    else{
      started = false;
      $("#level-title").text("Wrong Answer!. Press the SpaceBar to Play Again.");
      level = 1;
  
    }
  }
  else{
    //do nothing. Space bar not pressed.
  }
});

function  notePause (timeDelay){
  var startTime = new Date();
  var timeDifference = new Date();
  var result = 0; //dummy
  var i = 1;
  do {
    var tmpDate = new Date();
    i = i + 1;
    result = result + i;
    timeDifference = (tmpDate - startTime);
  } while (timeDifference < timeDelay);
}
// function checkResponse() {
//   // https://stackoverflow.com/questions/1773069/using-jquery-to-compare-two-arrays-of-javascript-objects
//   if (JSON.stringify(gamePattern) == JSON.stringify(responsePattern)) {
//     alert("Collections are equal");

//   } else {
//     alert("Collections are not equal");
//   }
//   responsePattern = [];
// }
