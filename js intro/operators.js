// var x = 23;

// x = 34;

// var x = 67;

// let x = 56;

// x = 67;

// let x = 78;

// const x = 45;
// x = 67;

// console.log(x);
// const x = 67;

// arithmetic operators

let a = 12,
  b = 3;

// console.log(a + b); // sum
// console.log(a - b); // difference
// console.log(a * b); // product
// console.log(a / b); // quotient
// console.log(a % b); // remainder
// console.log(a ** b); // remainder

// let x = 23; // simple assignment

// a = a + 12;

// a += 12; // add and assign
// a -= 12; // subtract and assign
// a *= 12; // MUTIPLY and assign
// a /= 12; // divide and assign
// a %= 12; // remainder and assign
// a **= 12; // exponent and assign

// equals to
// console.log(a == b); // compare values
// console.log(2 == "2"); // compare values

// strict equals
// console.log(2 === "2"); // compare values and data type
// console.log("2" === "2"); // compare values and data type

// console.log(a != b); // compares value
// console.log("2" != 2); // compares value

// strict not equals
// console.log("2" !== 2); // compares value and data type

// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);

// console.log(12 > 10 && 12 < 34); // t && t = t
// console.log(12 < 10 && 12 < 34); // f && t = f
// console.log(12 < 10 && 12 > 34); // f && f = f

// console.log(12 > 10 || 12 < 34); // t || t = t
// console.log(12 < 10 || 12 < 34); // f || t = t
// console.log(12 < 10 || 12 > 34); // f || f = f

// console.log(!true);

// let x = "john",
//   y = "doe";
// console.log(x + " " + y);

// let isEligible;

// var age = parseInt(prompt("Enter age : "));

// if (age >= 18) {
//   isEligible = true;
// } else {
//   isEligible = false;
// }

// let isEligible = parseInt(prompt("Enter age : ")) >= 18 ? true : false;

// console.log(isEligible);

// let isEligible = parseInt(prompt("Enter age : ")) >= 18 && true

// console.log(isEligible);

// console.log("a" in "hello world this is rohan");
var car = {
  name: "my car",
  type: "sedan",
};

// console.log("name" in car);

// var data = new Date();

// console.log(data instanceof Date);

// console.log(car);
// delete car.name;

// console.log(car);

// let myCar = {
//   ...car,
//   wheels: 4,
// };

// console.log([...car]);

// var marks = [12, 2, 3, 45, 67];
// console.log([...marks, 34, 4, 7]);

// var data = [
//   { name: "john doe", age: 23 },
//   { name: "john doe", age: 23 },
//   { name: "john doe", age: 23 },
// ];

// var updated = [];

// for (var i = 0; i < data.length; i++) {
//   updated.push({ ...data[i], id: 123 });
// }

// console.log(updated);

// var data = { name: "john doe", age: 23, gender: "Male" };
//
// console.log(data.name);
// console.log(data["name"]);

// var { name: hello, age } = data;

// console.log(hello, age);

// function sum(...values) {
//   // rest : collect
//   console.log(values);
// }

// sum(12, 34, 56, 67, 78);

// var marks = [12, 2, 3, 45, 67];
// console.log([...marks, 34, 4, 7]);

// function updateData(name, age, gender) {
//   return { name, age, gender, id: Math.floor(Math.random() * 10) };
// }

// var { id, name } = updateData("john", 23, "Male");

// console.log(id, name);
