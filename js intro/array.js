var marks = [12, 34, 45, 56, 34, 100];
var fruits = ["apple", "banana", "cherry"];
// var data = [
//   { name: "ford", brand: "120", year: 202 },
//   { name: "ford", brand: "120", year: 202 },
//   { name: "ford", brand: "120", year: 202 },
// ];

// console.log(marks.at(0));
// console.log(marks.at(-1));

// console.log(marks + fruits); // string

// console.log(marks.concat(fruits)); // array

// var new_arr = [...marks, ...fruits];
// console.log(new_arr);

// function printdata(...props) {
//   // rest
//   console.log({ ...props }); //  spread
// }

// printdata(12, 34, 4, 5, 667);

// marks.find((mark, index, arr) => {
//   console.log(mark, index, arr);
// });

// var myMarks = marks.find((mark) => mark == 100);

// console.log(myMarks);

var data = [
  { id: 1, name: "i10", brand: "Hyundai", year: 2020 },
  { id: 2, name: "mustand", brand: "ford", year: 2022 },
  { id: 3, name: "x3", brand: "bmw", year: 2021 },
  { id: 4, name: "i20", brand: "Hyundai", year: 2020 },
];

// return the item which fulfils the condition, else return undefined
// var findCar = data.find((itemObj) => itemObj.brand === "Hyundai"); // object

// console.log(findCar);
// var findCar = data.filter((itemObj) => itemObj.brand === "Hyundai"); // array

// console.log(findCar);

// Key Concepts:
// 	1.	Arrays: Used to store multiple values in a single variable.
// 	2.	at Method: Access an array element using a positive or negative index.
// 	3.	Array Concatenation: Use + for strings or concat/spread operator for arrays.
// 	4.	Rest Operator: Collects multiple arguments into an array (...props in printdata).
// 	5.	Spread Operator: Expands elements of an array or object.
// 	6.	find: Returns the first element that satisfies a condition, or undefined if none match.
// 	7.	filter: Returns all elements that satisfy a condition as an array.
// 	8.	Objects in Arrays: Used to store structured data with key-value pairs.

// var new_data = [];

// for (var i = 0; i < data.length; i++) {
//   new_data.push({ ...data[i], wheels: 4 });
// }

// doesn't return anything

// var newData = data.forEach((mark) => {
//   return new_data.push({ ...mark, wheels: 4 });
// });

// console.log(newData);

// var sq = [];

// for (var i = 0; i < marks.length; i++) {
//   sq.push(marks[i] ** 2);
// }

// console.log(sq);

// iterate and perform : return new array storing results

// var sq = marks.map((mark) => mark ** 3);

// console.log(sq);

// data = data.map((dataObj) => ({
//   ...dataObj,
//   brand: dataObj.brand.toUpperCase(),
// }));

// console.log(data);

// var result = marks.map((mark) => mark % 2 == 0);

// console.log(result);

// var result = marks.map((mark) => {
//   return { [mark]: mark % 2 == 0 ? "Even" : "Odd" };
// });

// console.log(result);

// var result = [];
// marks.forEach((mark) => {
//   if (mark % 2 == 0) {
//     result.push(mark);
//   }
// });

// console.log(result);

// var res = marks.map((mark) => {
//   if (mark % 2 == 0) {
//     return mark;
//   }
// });

// var res = marks.filter((mark) => mark % 2 == 0);
// console.log(res);

// function filterData(dataArr, delId) {
//   return dataArr.filter((obj) => obj.id !== delId);
// }

// console.log(filterData(data, 3));

// var x = marks.map((mark) => mark ** 3).filter((mark) => mark % 5 == 0);

// var sum = 0;

// marks.forEach((mark) => (sum += mark));

// console.log(sum);

// var marks = [12, 34, 45, 56, 34, 100];

// //  value of acc is not specified explicitly
// // acc : marks[0] , cv : marks[1]
// var res = marks.reduce((acc, cv) => {
//   return acc + cv; // acc = acc + cv
// });

// console.log(res);

// var marks = [12, 34, 45, 56, 34, 100];

// //  value of acc is  specified explicitly

// // acc : specified by us , cv : marks[0]
// var res = marks.reduce((acc, cv) => {
//   return acc + cv; // acc = acc + cv
// }, 0);

// console.log(res);

// console.log(
//   marks.sort((a, b) => {
//     // return a - b;
//     // return b - a;
//   })
// );

// values = [2234, 123, 12, 34, 45, "hello", "world", "nitin"];

// console.log(
//   values.sort((a, b) => {
//     return a - b;
//     // return b - a;
//   })
// );

// var val = [2234, 123, 12, 34, 45, "nitin", "nikhil", "natraj", "nuran"];
// console.log(val.sort());

// values = [2234, 123, 12, 34, 45, "hello", "world", "nitin"];

// console.log(
//   values.sort((a, b) => {
//     if (typeof a === "number") {
//       return a - b;
//     }
//     if (typeof a === "string") {
//       return a.localeCompare(b);
//     }
//     return typeof a === "number";
//   })
// );

// console.log(marks.map((value) => value ** 2)); // return an array containing squares of numbers
// console.log(marks.filter((value) => value % 2 === 0)); // return an array containing items , which passed the condition
// console.log(marks.find((value) => value % 2 === 0)); // return first item which passed the condition
// console.log(marks.map((value) => value % 2 === 0)); // return first item which passed the condition
