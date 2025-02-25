// const newParagraph = document.createElement("p");
// newParagraph.innerText = "hello world this is a new paragraph";

// document.querySelector("#root").appendChild(newParagraph);

// let newListItem = document.createElement("li");
// newListItem.textContent = "Dragonfruit";
// newListItem.style.color = "red";
// const list = document.querySelector("ul");

// list.appendChild(newListItem);
//

// list.insertBefore(newListItem, list.firstChild);

// let newHeading = document.createElement("h2");
// newHeading.textContent = "New Replaced Heading";

// let parent = document.querySelector("#container");
// let oldElement = parent.querySelector("h2");
// console.log(oldElement);

// parent.replaceChild(newHeading, oldElement);

// let parent = document.querySelector("#container");

// for (var i = 1; i <= 3; i++) {
//   let newParagraph = document.createElement("p");
//   newParagraph.textContent = `Paragraph ${i}`;
//   parent.appendChild(newParagraph);
// }

// let newListItem = document.createElement("li");
// newListItem.textContent = "Dragonfruit";
// newListItem.style.color = "red";
// const list = document.querySelector("ul");

// let secondsChild = list.children[1];

// list.insertBefore(newListItem, secondsChild);

const orignal = document.querySelector("#container");

const copy = orignal.cloneNode(true);

copy.id = "container_2";

copy.querySelector("h2").textContent = "i am a copy";

document.body.appendChild(copy);

// copy.removeChild(copy.querySelector("h2"));

copy.querySelector("h2").remove();
