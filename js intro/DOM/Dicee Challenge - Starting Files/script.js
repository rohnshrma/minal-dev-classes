const dices = document.querySelectorAll("img");
const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const heading = document.querySelector("h1");

document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    play();
  }
});

function play() {
  const n1 = Math.floor(Math.random() * 6) + 1;
  const n2 = Math.floor(Math.random() * 6) + 1;
  dices.forEach((dice) => dice.classList.add("spin"));
  setTimeout(() => {
    dices.forEach((dice) => dice.classList.remove("spin"));
  }, 1000);

  dice1.setAttribute("src", `./images/dice${n1}.png`);
  dice2.setAttribute("src", `./images/dice${n2}.png`);

  if (n1 > n2) {
    heading.innerText = "✅ Player 1 Wins";
  } else if (n2 > n1) {
    heading.innerText = "Player 2 Wins ✅";
  } else {
    heading.innerText = "Draw";
  }
}

dices.forEach((dice) => dice.classList.add("shadow"));

heading.addEventListener("click", play);
