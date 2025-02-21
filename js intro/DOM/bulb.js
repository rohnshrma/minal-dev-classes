const on_btn = document.querySelector("#on_btn");
const off_btn = document.querySelector("#off_btn");
const bulb_img = document.querySelector(".bulb_img");

function on() {
  bulb_img.setAttribute("src", "./images/on.png");
}
function off() {
  bulb_img.setAttribute("src", "./images/off.png");
}

on_btn.addEventListener("click", on);
off_btn.addEventListener("click", off);

// bulb_img.style.filter = "drop-shadow(10px 10px 4px #ccc)";

// on_btn.style =
//   "border-color:transparent;padding:10px 12px;background-color:teal;color:#fff;font-family:arial;";

// console.log(on_btn.classList);

// on_btn.classList.add("btn");
// on_btn.setAttribute("class", "btn");
