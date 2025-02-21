var drums = document.querySelectorAll(".drum");
drums.forEach((drum) => {
  drum.addEventListener("click", (e) => {
    const key = e.target.textContent;
    playSound(key);
    animate(key);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  playSound(key);
  animate(key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
  }
}

function animate(key) {
  var drum = document.querySelector(`.${key}`);
  drum.classList.add("pressed");
  setTimeout(() => {
    drum.classList.remove("pressed");
  }, 100);
}
