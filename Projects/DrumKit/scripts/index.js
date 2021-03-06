const drumPads = document.querySelectorAll(".drum");
for (let i = 0; i < drumPads.length; i++) {
  drumPads[i].addEventListener("click", function() {
    playAudio(drumPads[i].classList[0]);
  });
}
for (let i = 0; i < drumPads.length; i++) {
  drumPads[i].addEventListener("mousedown", function() {
    drumPads[i].classList.toggle("pressed");
  });
}

for (let i = 0; i < drumPads.length; i++) {
  drumPads[i].addEventListener("mouseup", function() {
    drumPads[i].classList.toggle("pressed");
  });
}

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  playAudio(keyName);
  try {
    document.querySelector("." + keyName).classList.toggle("pressed");
  } catch (err)
  {
    console.log("Unassigned key: " + keyName);
  }
});

document.addEventListener('keyup', (event) => {
  const keyName = event.key;
  playAudio(keyName);
  try {
    document.querySelector("." + keyName).classList.toggle("pressed");
  } catch (err)
  {
    // console.log("Unassigned key: " + keyName);
  }

});

// document.addEventListener('keyup', (event) => {
//   const keyName = event.key;
//   switch (keyName) {
//     case 'l':
//       document.querySelector(".l").classList.toggle("pressed");
//       break;
//     case 'j':
//       document.querySelector(".j").classList.toggle("pressed");
//       break;
//     case 'k':
//       document.querySelector(".k").classList.toggle("pressed");
//       break;
//     case 'w':
//       document.querySelector(".w").classList.toggle("pressed");
//       break;
//     case 'a':
//       document.querySelector(".a").classList.toggle("pressed");
//       break;
//     case 's':
//       document.querySelector(".s").classList.toggle("pressed");
//       break;
//     case 'd':
//       document.querySelector(".d").classList.toggle("pressed");
//       break;
//   }
// });

function playAudio(selectedSound) {
  switch (selectedSound) {
    case 'l':
      var audio = new Audio("sounds/crash.mp3");

      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
  }
}
