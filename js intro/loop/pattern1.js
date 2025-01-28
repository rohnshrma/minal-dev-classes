// 13. Write a "for" loop to create a pattern like this:
// *
// **
// ***
// ****
// *****

const rl = require("readline-sync");
const lines = parseInt(rl.question("Enter Number of lines :: "));

for (var i = 1; i <= lines; i++) {
  var line = "";
  for (j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}
