// greet("hailey");
// // console.log(x);
// function greet(name) {
//   console.log("hello world my name is ", name);
// }

// greet("hailey");
// greet("hailey");
// greet("hailey");

// var x = 10;

// function calcAge(yob) {
//   return new Date().getFullYear() - yob;
// }

// function lifeSpan(cb, average_age, yob) {
//   var years_left = average_age - cb(yob);
//   console.log("You've ", years_left, "left to live");
// }

// lifeSpan(calcAge, 90, 1995);

// 1
// var addition = function (x, y) {
//   console.log(x + y);
// };

function lifeSpan(cb, average_age, yob) {
  var years_left = average_age - cb(yob);
  console.log("You've ", years_left, "left to live");
}

lifeSpan(
  function (yob) {
    return new Date().getFullYear() - yob;
  },
  90,
  1995
);
