const playSound = (key) => {
  const sounds = {
    w: "crash",
    a: "kick-bass",
    s: "snare",
    d: "tom-1",
    j: "tom-2",
    k: "tom-3",
    l: "tom-4",
  };

  if (sounds[key]) console.log(`./sounds/${sounds[key]}.mp3`);
  if (sounds[key]) new Audio(`./sounds/${sounds[key]}.mp3`).play();
};

function animate(key) {
  var drum = document.querySelector(`.${key}`);
  if (drum) {
    drum.classList.add("pressed");
    setTimeout(() => drum.classList.remove("pressed"), 100);
  }
}

const handleEvent = (key) => {
  key = key.toLowerCase().trim();

  var validKeys = ["w", "a", "s", "d", "j", "k", "l"];
  if (validKeys.includes(key)) {
    playSound(key);
    animate(key);
  }
};

document
  .querySelectorAll(".drum")
  .forEach((drum) =>
    drum.addEventListener("click", (e) => handleEvent(e.target.textContent))
  );

document.addEventListener("keydown", (e) => handleEvent(e.key));
