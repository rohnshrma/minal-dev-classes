const rl = require("readline-sync");
const num1 = parseInt(rl.question("Enter Number 1 :: "));
const num2 = parseInt(rl.question("Enter Number 2 :: "));

var smallNum;
if (num1 > num2) {
  smallNum = num2;
} else {
  smallNum = num1;
}

var ans = 1;
for (var i = 2; i <= smallNum / 2; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    ans = i;
  }
}
console.log(ans);
