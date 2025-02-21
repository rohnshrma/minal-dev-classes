const w = document.querySelector(".w");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");

w.addEventListener("click", () => {play("crash"); setKeyPressedStyle(w)});
a.addEventListener("click", () => {play("kick-bass"); setKeyPressedStyle(a)});
s.addEventListener("click", () => {play("snare"); setKeyPressedStyle(s)});
d.addEventListener("click", () => {play("tom-1"); setKeyPressedStyle(d)});
j.addEventListener("click", () => {play("tom-2"); setKeyPressedStyle(j)});
k.addEventListener("click", () => {play("tom-3"); setKeyPressedStyle(k)});
l.addEventListener("click", () => {play("tom-4"); setKeyPressedStyle(l)});


w.addEventListener("keydown", (event)  =>  {playOnKeyPress(event.code,"crash"); setKeyPressedStyle(w)});
a.addEventListener("keydown", (event)  =>  {playOnKeyPress(event.code,"kick-bass"); setKeyPressedStyle(a)});
s.addEventListener("keydown", (event)  =>  {playOnKeyPress(event.code,"snare"); setKeyPressedStyle(s)});
d.addEventListener("keydown", (event)  =>  {playOnKeyPress(event.code,"tom-1"); setKeyPressedStyle(d)});
j.addEventListener("keydown", (event)  =>  {playOnKeyPress(event.code,"tom-2"); setKeyPressedStyle(j)});
k.addEventListener("keydown", (event)  =>  {playOnKeyPress(event.code,"tom-3"); setKeyPressedStyle(k)});
l.addEventListener("keydown", (event)  =>  {playOnKeyPress(event.code,"tom-4"); setKeyPressedStyle(l)});


function setKeyPressedStyle(ele) {
  ele.classList.add("pressed");
  setTimeout(() => {
    ele.classList.remove("pressed");
  }, 200);
}


function playOnKeyPress(code, soundToPlay) {
  console.log("Play on key press invoke");
  console.log("eVENT CODE :" + code);
  if (code === "KeyE") {
    play(`${soundToPlay}`);
  }
}


function play(soundToPlay) {
  var audio = new Audio(`./sounds/${soundToPlay}.mp3`);
  audio.play();
}