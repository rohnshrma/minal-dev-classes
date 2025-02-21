document.addEventListener("keydown", (e) => {
  if (e.key == " ") {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    document.querySelector(
      "body"
    ).style.backgroundColor = `rgb(${red},${green},${blue})`;

    document.querySelector("h2").innerText = `rgb(${red},${green},${blue})`;
  }
});
