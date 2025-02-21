// global content :
// browser : window
// console.log(this);

// "use strict";
// x = 34;
// console.log(x);

// "use strict";
// function addition(a, a) {
//   console.log(a + a);
// }

// addition(12, 34);

// "use strict";
// var x = 23;
// delete x;

// console.log(x);

// function hello() {
//   console.log(this);
// }

// hello();

// "use strict";
// function hello() {
//   console.log(this);
// }

// hello();

// const obj = {
//   name: "jane",
//   greet: function () {
//     console.log(this.name);
//   },
// };

// const obj = {
//   name: "jane",
//   greet: () => {
//     console.log(this.name);
//   },
// };

// obj.greet();

// var abc = obj.name;
// console.log(abc);

// obj.greet();

// var greeting = obj.greet.bind(obj);

// greeting();

// function Person(name) {
//   this.name = name;
// }

// var z = new Person("zayn");
// console.log(z.name);

// var z = new Person("zayn");
// console.log(z.name);

// document.querySelector("button").addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log(this);
// });

const obj = {
  name: "jane",
  greet: function () {
    setTimeout(() => {
      console.log(this);
    }, 4000);
  },
};

obj.greet();
