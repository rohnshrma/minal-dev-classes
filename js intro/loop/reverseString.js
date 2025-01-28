const rl = require("readline-sync");
const input = rl.question("Enter String to reverse :: ");

var length = input.length;
var ans = "";
while (length > 0) {
  ans += input[length - 1];
  length--;
}
console.log(ans);
