// 20. Write a "for" loop to create a pattern like this:
//     *
//    ***
//   *****
//  *******
// *********

const rl = require("readline-sync");
const lines = parseInt(rl.question("Enter Number of lines :: "));

var blank = lines - 1;
for (var i = 1; i <= lines; i++) {
  var line = "";
  for (var j = 1; j <= blank; j++) {
    line += " ";
  }
  blank--;
  if (i == 1) {
    line += "*";
  } else {
    for (var k = 1; k <= 2 * (i - 1) + 1; k++) {
      line += "*";
    }
  }
  console.log(line);
}
