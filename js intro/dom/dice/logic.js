console.log("DICEE")

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min + 1));
}

img1.src = `./images/dice${getRandomInt(1,6)}.png`
img2.src = `./images/dice${getRandomInt(1,6)}.png`


document.getElementById("HitRefresh").addEventListener("click", () => location.reload())



