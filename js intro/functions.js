// addition(12, 34);

// functional declaration

// function funcName(parameters){
// code to execute
// }

// function addition(x, y) {
//   console.log(x + y);
// }

// anonymous function

// function (name) {
//   console.log("hello world my name is", name);
// }

//1. assign it as a value to a variable

// var greeting = function (name) {
//   console.log("hello world my name is", name);
// };

// greeting("minal");

// var prints = function () {
//   console.log(1);
//   console.log(2);
//   return "greetings nitin";
//   return "bye bye";
//   console.log(3);
//   console.log(4);
//   console.log(5);
// };

// when a function is passed into another function as a parameter
// the passed function is called callback

// function calcAge(yob) {
//   return new Date().getFullYear() - yob;
// }

// // console.log(calcAge(1995));

// function lifeSpan(ageFunc, averageAge, yob) {
//   var years_left = averageAge - ageFunc(yob);
//   console.log(years_left);
// }

// lifeSpan(calcAge, 100, 1999);
// lifeSpan(calcAge, 100, 1995);

// console.log(calcAge(1995));

// 2. use it as a callback function

// function lifeSpan(ageFunc, averageAge, yob) {
//   var years_left = averageAge - ageFunc(yob);
//   console.log(years_left);
// }

// lifeSpan(
//   function (yob) {
//     return new Date().getFullYear() - yob;
//   },
//   100,
//   1995
// );

// function printDetails(cb, a, b) {
//   console.log(`The results is `, cb(a, b));
// }

// printDetails(
//   function (a, b) {
//     return a + b;
//   },
//   23,
//   45
// );

// ========== arrow function

// 1. assign it as a value to a variable

// var greetings = (name) => {
//   console.log("hello", name);
// };

// greetings("nitin");

// function addition(x, y) {
//   return x + y;
// }

// var addition = function (x, y) {
//   return x + y;
// };

// syntax 1. if all your function does is return something , then {} and return keyword can be omitted

// var addition = (x, y) => x + y;

// syntax 2. if your function takes exaclty one parameter , then () can be omitted

// var calSq = (n) => n ** 2;

// var lifeSpan = (ageFunc, averageAge, yob) =>
//   console.log(averageAge - ageFunc(yob));

// lifeSpan((yob) => new Date().getFullYear() - yob, 100, 1995);
